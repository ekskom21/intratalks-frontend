import React from 'react';

import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

import { COMPANY, CompanyDetails as CompanyDetailsT } from '../../api/queries/company';
import { QueryCompanyArgs } from '../../generated/graphql';

import LoadingAndErrorWrapper from '../molecules/LoadingAndErrorWrapper';
import classNames from 'classnames';

const CompanyDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const { data, loading, error } = useQuery<CompanyDetailsT, QueryCompanyArgs>(COMPANY, { variables: { _id: id } });

    return (
        <LoadingAndErrorWrapper loading={loading} error={error} data={data}>
            {({ company }) => (
                <>
                    <div
                        className={classNames(
                            'w-full',
                            'bg-gradient-to-br',
                            `from-${company?.colors.primary}`,
                            `to-${company?.colors.secondary}`,
                            'mb-4',
                            'pt-16',
                            'pb-4',
                            'px-4',
                            'rounded-lg',
                            'text-white',
                            'dark:text-black',
                        )}
                    >
                        <h1 className={classNames('text-3xl', 'font-bold', 'mb-1')}>{company?.name}</h1>
                        <p className={classNames('max-w-prose')}>{company?.description}</p>
                    </div>

                    {company?.events.map((event) => (
                        <Link to={`/event/${event._id}`} key={event._id}>
                            <div
                                className={classNames(
                                    'dark:border-gray-800',
                                    'border-2',
                                    'border-gray-100',
                                    'mb-4',
                                    'p-4',
                                    'rounded-md',
                                    'cursor-pointer',
                                )}
                            >
                                <h3
                                    className={classNames(
                                        'text-2xl',
                                        'font-extrabold',
                                        'bg-gradient-to-r',
                                        `from-${company.colors.primary}`,
                                        `to-${company.colors.secondary}`,
                                        'text-transparent',
                                        'bg-clip-text',
                                    )}
                                >
                                    {event.title}
                                </h3>

                                <span className={classNames('text-sm')}>📍 {event.location.name}</span>
                                <p className={classNames('dark:text-gray-400 text-gray-500')}>
                                    {event.description}{' '}
                                    <span
                                        className={classNames(
                                            'bg-gradient-to-r',
                                            `from-${company.colors.primary}`,
                                            `to-${company.colors.secondary}`,
                                            'text-transparent',
                                            'bg-clip-text',
                                            'font-extrabold',
                                        )}
                                    >
                                        →
                                    </span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default CompanyDetails;
