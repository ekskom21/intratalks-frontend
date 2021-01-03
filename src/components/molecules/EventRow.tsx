import React from 'react';

import SmallEvent from '../atoms/SmallEvent';

import { Event } from '../../generated/graphql';

type Props = { events: Array<Event>; desiredId?: string };

const EventRow: React.FC<Props> = (props) => {
    return (
        <div className="flex max-w-full pb-2 overflow-auto lg:gap-4 lg:grid lg:grid-cols-4 flex-nowrap lg:flex-wrap lg:pb-0">
            {props.events
                .sort((event1, event2) =>
                    event1._id === props.desiredId ? -1 : event2._id === props.desiredId ? 1 : 0,
                )
                .map((event) => (
                    <SmallEvent
                        event={event}
                        company={event.company}
                        key={event._id}
                        isDesiredEvent={event._id === props.desiredId}
                    />
                ))}
        </div>
    );
};

export default EventRow;
