import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    event: {
        id: number;
        company: { name: string; gradient: string };
        title: string;
        location: string;
    };
};

const SmallEvent: React.FC<Props> = ({ event }) => {
    return (
        <Link to={`/event/${event.id}`}>
            <section className="flex justify-between my-2">
                <div>
                    <h5 className="font-semibold">{event.title}</h5>
                    <small>
                        {event.company.name} · {event.location}
                    </small>
                </div>
                <span
                    className={`self-center bg-gradient-to-r ${event.company.gradient} font-extrabold text-xl mb-2 bg-clip-text text-transparent`}
                >
                    →
                </span>
            </section>
        </Link>
    );
};

export default SmallEvent;
