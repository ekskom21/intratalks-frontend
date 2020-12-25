import classNames from 'classnames';
import { addHours, formatDistanceToNow, isFuture, isPast, subHours } from 'date-fns';
import { nb } from 'date-fns/locale';
import React from 'react';

import { Link } from 'react-router-dom';

const ComingEvents: React.FC = () => {
    const comingEvents = [
        {
            id: 0,
            time: subHours(new Date(), 4),
            duration: 3,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
            title: 'Introduksjon til Elm',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: 'Graffi',
        },
        {
            id: 1,
            time: subHours(new Date(), 1),
            duration: 2,
            company: { name: 'Kodeworks', gradient: 'from-red-500 to-yellow-400' },
            title: 'Dytte Data',
            description:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            location: "Alma's",
        },
        {
            id: 2,
            time: addHours(new Date(), 5),
            duration: 5,
            company: { name: 'Netlight', gradient: 'from-blue-400 to-green-500' },
            title: 'Kaffekok 101',
            description:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            location: 'Sot Bar & Burger',
        },
    ];

    return (
        <>
            {comingEvents.map((event) => {
                const hasPassed = isPast(addHours(event.time, event.duration));
                const isNow = isPast(event.time) && isFuture(addHours(event.time, event.duration));

                return (
                    <Link to={`/event/${event.id}`} key={`${event.title}@${event.time}`}>
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
                                {isNow ? 'pågår nå' : formatDistanceToNow(event.time, { addSuffix: true, locale: nb })}
                            </small>

                            <h3
                                style={{ filter: `saturate(${hasPassed ? 0 : 1})` }}
                                className={classNames(
                                    'text-2xl',
                                    'font-extrabold',
                                    'bg-gradient-to-r',
                                    event.company.gradient,
                                    'text-transparent',
                                    'bg-clip-text',
                                )}
                            >
                                {event.title}
                            </h3>

                            {!hasPassed ? (
                                <>
                                    <span className={classNames('text-sm')}>
                                        på {event.location} med {event.company.name}
                                    </span>
                                    <p className={classNames('dark:text-gray-400 text-gray-500')}>
                                        {event.description}{' '}
                                        <span
                                            className={classNames(
                                                'bg-gradient-to-r',
                                                event.company.gradient,
                                                'text-transparent',
                                                'bg-clip-text',
                                            )}
                                        >
                                            →
                                        </span>
                                    </p>
                                </>
                            ) : null}
                        </section>
                    </Link>
                );
            })}
        </>
    );
};

export default ComingEvents;
