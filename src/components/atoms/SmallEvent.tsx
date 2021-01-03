import React from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { Company, Event } from '../../generated/graphql';

type Props = {
    event: Event;
    company: Company;
    isDesiredEvent?: boolean;
};

const SmallEvent: React.FC<Props> = ({ company, event, isDesiredEvent }) => {
    return (
        <Link to={`/event/${event._id}`}>
            <section
                className={classNames(
                    isDesiredEvent ? `border-${company.colors.primary}` : 'border-gray-700 dark:border-white',
                    'flex',
                    'justify-between',
                    'my-2',
                    'w-60',
                    'mr-4',
                    'p-4',
                    isDesiredEvent ? 'border-4' : 'border',
                    'rounded-md',
                    'h-36',
                    'justify-items-end',
                    'align-bottom',
                    'overflow-hidden',
                    'overflow-ellipsis',
                )}
            >
                <div className="self-end">
                    <h5
                        className={classNames(
                            'self-center',
                            'bg-gradient-to-r',
                            `from-${company.colors.primary}`,
                            `to-${company.colors.secondary}`,
                            'font-extrabold',
                            'text-lg',
                            'bg-clip-text',
                            'text-transparent',
                        )}
                    >
                        {event.title}
                    </h5>
                    <small>
                        {company.name} · {event.location.name}
                    </small>
                </div>
            </section>
        </Link>
    );
};

export default SmallEvent;
