import React from 'react';

import Select, { ValueType } from 'react-select';
import classNames from 'classnames';
import { useMutation, useQuery } from '@apollo/client';

import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import { DesiredEvents as DesiredEventsT, DESIRED_EVENTS } from '../../api/queries/desiredEvents';
import { RegisterInterest, REGISTER_INTEREST } from '../../api/mutations/registerInterest';

import { Event, MutationRegisterInterestArgs } from '../../generated/graphql';

const DesiredEvents: React.FC = () => {
    const { data, loading, error } = useQuery<AllCompanies>(ALL_COMPANIES);
    const {
        data: desiredEventsData,
        loading: desiredEventsLoading,
        error: desiredEventsError,
    } = useQuery<DesiredEventsT>(DESIRED_EVENTS);
    const [registerInterest, { loading: mutationLoading }] = useMutation<
        RegisterInterest,
        MutationRegisterInterestArgs
    >(REGISTER_INTEREST);

    const events = React.useMemo(() => {
        const baseMap = {
            BREAKFAST: [],
            LUNCH: [],
            DINNER: [],
        } as Record<'BREAKFAST' | 'LUNCH' | 'DINNER', Array<Event>>;

        if (!data) return baseMap;

        return data.companies
            .flatMap((company) => company.events)
            .reduce((prev, curr) => ({ ...prev, [curr.time]: prev[curr.time].concat(curr) }), baseMap);
    }, [data]);

    if (loading) {
        return <p className="mt-4">Laster arrangementer…</p>;
    }

    if (desiredEventsLoading) {
        return <p className="mt-4">Laster dine valgte arrangementer…</p>;
    }

    if (error) {
        return (
            <p className="mt-4">
                Kunne ikke laste arrangementer: {error.message} Vennligst forsøk å laste inn siden på nytt.
            </p>
        );
    }

    if (desiredEventsError) {
        return (
            <p className="mt-4">
                Kunne ikke laste dine ønskede arrangementer: {desiredEventsError.message} Vennligst forsøk å laste inn
                siden på nytt.
            </p>
        );
    }

    const breakfast = desiredEventsData?.desiredEvents.breakfast;
    const lunch = desiredEventsData?.desiredEvents.lunch;
    const dinner = desiredEventsData?.desiredEvents.dinner;

    const onChange = (value: ValueType<{ label: string; value: string }, false>) => {
        if (!value) return;
        registerInterest({ variables: { event_id: value.value } });
    };

    return (
        <>
            <h2 className={classNames('text-2xl', 'font-bold', 'mt-4')}>Ønsker</h2>
            <small>
                {mutationLoading
                    ? 'Ønskene dine lagres…'
                    : 'Ønskene dine blir automatisk lagret. Du kan kun velge ett ønsket arrangement for frokost/lunsj/middag.'}
            </small>

            <Select
                onChange={onChange}
                defaultValue={
                    breakfast
                        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          {
                              label:
                                  events.BREAKFAST.find((e) => e._id === breakfast._id)?.title ??
                                  'Fant ikke arrangementet ditt.',
                              value: breakfast._id,
                          }
                        : null
                }
                className={classNames('text-black', 'mt-2')}
                placeholder="Velg et frokostarrangement"
                options={events.BREAKFAST.map((event) => ({ label: event.title, value: event._id }))}
            />
            <Select
                onChange={onChange}
                defaultValue={
                    lunch
                        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          {
                              label:
                                  events.LUNCH.find((e) => e._id === lunch._id)?.title ??
                                  'Fant ikke arrangementet ditt.',
                              value: lunch._id,
                          }
                        : null
                }
                className={classNames('text-black', 'mt-4')}
                placeholder="Velg et lunsjarrangement"
                options={events.LUNCH.map((event) => ({ label: event.title, value: event._id }))}
            />
            <Select
                onChange={onChange}
                defaultValue={
                    dinner
                        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          {
                              label:
                                  events.DINNER.find((e) => e._id === dinner._id)?.title ??
                                  'Fant ikke arrangementet ditt.',
                              value: dinner._id,
                          }
                        : null
                }
                className={classNames('text-black', 'mt-4')}
                placeholder="Velg et middagsarrangement"
                options={events.DINNER.map((event) => ({ label: event.title, value: event._id }))}
            />
        </>
    );
};

export default DesiredEvents;
