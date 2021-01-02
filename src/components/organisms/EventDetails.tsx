import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { EVENT, SpecificEvent } from '../../api/queries/event';

const EventDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data } = useQuery<SpecificEvent>(EVENT, {
        variables: {
            _id: id,
        },
    });

    if (!data) return <span>Loading...</span>;

    const { event } = data;

    return (
        <>
            <Link to={`/company/${event.company._id}`}>
                <span
                    className={classNames(
                        'bg-gradient-to-r',
                        `from-${event.company.colors.primary}`,
                        `to-${event.company.colors.secondary}`,
                        'rounded-lg',
                        'mb-2',
                        'inline-block',
                        'bg-clip-text',
                        'text-transparent',
                        'font-extrabold',
                    )}
                >
                    {event.company.name} →
                </span>
            </Link>

            <small className={classNames('dark:text-gray-300', 'text-sm', 'block')}>{event.event.time}</small>

            <h2 className={classNames('font-bold', 'text-2xl')}>{event.event.title}</h2>

            <strong className={classNames('text-sm', 'font-bold')}>{event.event.location.name}</strong>

            <p className={classNames('mt-4')}>{event.event.description}</p>
        </>
    );
};

export default EventDetails;
