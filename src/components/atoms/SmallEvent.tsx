import React from 'react';

import { Link } from 'react-router-dom';

import classNames from 'classnames';
import { Company, Event } from '../../generated/graphql';

type Props = {
    event: Event;
    company: Company;
};

const SmallEvent: React.FC<Props> = ({ company, event }) => {
    return (
        <Link to={`/event/${event._id}`}>
            <section className={classNames('flex', 'justify-between', 'my-2')}>
                <div>
                    <h5 className={classNames('font-semibold')}>{event.title}</h5>
                    <small>
                        {company.name} · {event.location.name}
                    </small>
                </div>
                <span
                    className={classNames(
                        'self-center',
                        'bg-gradient-to-r',
                        `from-${company.colors.primary}`,
                        `to-${company.colors.secondary}`,
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
