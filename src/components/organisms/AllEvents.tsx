import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { EVENTS, Events } from '../../api/queries/events';
import SmallEvent from '../atoms/SmallEvent';

const AllEvents: React.FC = () => {
    const { data } = useQuery<Events>(EVENTS);

    if (!data) return <span>loading...</span>;

    return (
        <main className={classNames('p-4')}>
            <h2 className={classNames('text-3xl', 'font-bold')}>Frokost</h2>
            {data.events
                .filter((e) => e.event.time === 'BREAKFAST')
                .map((ev) => (
                    <SmallEvent event={ev} key={ev.event._id} />
                ))}

            <h2 className={classNames('text-3xl', 'font-bold', 'mt-4')}>Lunsj</h2>
            {data.events
                .filter((e) => e.event.time === 'LUNCH')
                .map((ev) => (
                    <SmallEvent event={ev} key={ev.event._id} />
                ))}

            <h2 className={classNames('text-3xl', 'font-bold', 'mt-4')}>Middag</h2>
            {data.events
                .filter((e) => e.event.time === 'DINNER')
                .map((ev) => (
                    <SmallEvent event={ev} key={ev.event._id} />
                ))}
        </main>
    );
};

export default AllEvents;
