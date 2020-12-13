import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

const EventDetails: React.FC = () => {
    const event = {
        id: 0,
        time: '09:00 - 12:00',
        company: { id: 0, name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
        title: 'Introduksjon til Elm',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        location: 'Graffi',
    };

    return (
        <main className={classNames('p-4')}>
            <Link to={`/company/${event.company.id}`}>
                <span
                    className={classNames(
                        'bg-gradient-to-r',
                        event.company.gradient,
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

            <small className={classNames('dark:text-gray-300', 'text-sm', 'block')}>{event.time}</small>

            <h2 className={classNames('text-3xl')}>{event.title}</h2>

            <strong className={classNames('text-sm', 'font-bold')}>{event.location}</strong>

            <p className={classNames('mt-4')}>{event.description}</p>
        </main>
    );
};

export default EventDetails;
