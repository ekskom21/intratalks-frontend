import React from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { EventWithCompany } from '../../generated/graphql';

const SmallEvent: React.FC<{ event: EventWithCompany }> = ({ event }) => {
    return (
        <Link to={`/event/${event.event._id}`}>
            <section className={classNames('flex', 'justify-between', 'my-2')}>
                <div>
                    <h5 className={classNames('font-semibold')}>{event.event.title}</h5>
                    <small>
                        {event.company.name} · {event.event.location.name}
                    </small>
                </div>
                <span
                    className={classNames(
                        'self-center',
                        'bg-gradient-to-r',
                        `from-${event.company.colors.primary}`,
                        `to-${event.company.colors.secondary}`,
                        'font-extrabold',
                        'text-xl',
                        'mb-2',
                        'bg-clip-text',
                        'text-transparent',
                    )}
                >
                    →
                </span>
            </section>
        </Link>
    );
};

export default SmallEvent;
