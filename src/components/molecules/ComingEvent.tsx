import React from 'react';

import { formatDistanceToNowStrict, isFuture, isPast } from 'date-fns';
import { nb } from 'date-fns/locale';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Event } from '../../generated/graphql';
import { timetable } from '../../utils/timeTranslator';

type Props = {
    event: Event;
};

const ComingEvent: React.FC<Props> = (props) => {
    const { start, end } = timetable[props.event.time];

    const hasPassed = isPast(end);
    const isNow = isPast(start) && isFuture(end);

    return (
        <Link to={`/event/${props.event._id}`}>
            <section
                className={classNames(
                    'dark:border-gray-800',
                    'border-2',
                    'border-gray-100',
                    'mb-4',
                    'p-4',
                    'rounded-md',
                )}
            >
                <small className={classNames('dark:text-gray-300', 'text-sm')}>
                    {isNow && (
                        <span className="inline-flex w-3 h-3 mr-1">
                            <span className="absolute inline-flex w-2 h-2 bg-green-400 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
                        </span>
                    )}
                    {isNow ? 'pågår nå' : formatDistanceToNowStrict(start, { addSuffix: true, locale: nb })}
                </small>

                <h3
                    style={{ filter: `saturate(${hasPassed ? 0 : 1})` }}
                    className={classNames(
                        'text-2xl',
                        'font-extrabold',
                        'bg-gradient-to-r',
                        `from-${props.event.company.colors.primary}`,
                        `to-${props.event.company.colors.secondary}`,
                        'text-transparent',
                        'bg-clip-text',
                    )}
                >
                    {props.event.title}
                </h3>

                {!hasPassed ? (
                    <>
                        <span className={classNames('text-sm')}>
                            på {props.event.location.name} med {props.event.company.name}
                        </span>
                        <p className={classNames('dark:text-gray-400 text-gray-500')}>
                            {props.event.description}{' '}
                            <span
                                className={classNames(
                                    'bg-gradient-to-r',
                                    `from-${props.event.company.colors.primary}`,
                                    `to-${props.event.company.colors.secondary}`,
                                    'text-transparent',
                                    'bg-clip-text',
                                    'font-extrabold',
                                )}
                            >
                                →
                            </span>
                        </p>
                    </>
                ) : null}
            </section>
            j{' '}
        </Link>
    );
};

export default ComingEvent;
