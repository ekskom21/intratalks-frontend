import React from 'react';

const ComingEvents: React.FC = () => {
    const comingEvents = [
        {
            time: '09:00 - 12:00',
            company: { name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
            title: 'Introduksjon til Elm',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: 'Graffi',
        },
        {
            time: '13:00 - 15:00',
            company: { name: 'Kodeworks', gradient: 'from-red-500 to-yellow-400' },
            title: 'Dytte Data',
            description:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            location: "Alma's",
        },
        {
            time: '19:00-23:59',
            company: { name: 'Netlight', gradient: 'from-blue-400 to-green-500' },
            title: 'Kaffekok 101',
            description:
                'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            location: 'Sot Bar & Burger',
        },
    ];

    return (
        <main className="p-4 dark:bg-black dark:text-white">
            <h1 className="text-4xl font-bold mb-8">Arrangementer</h1>
            {comingEvents.map((event) => (
                <section
                    key={`${event.title}@${event.time}`}
                    className="dark:bg-gray-900 bg-gray-200 my-4 p-4 rounded-lg"
                >
                    <div className={`bg-gradient-to-r ${event.company.gradient} h-2 rounded-full mb-2`}></div>

                    <small className="dark:text-gray-300 text-sm">
                        {event.time} · {event.company.name}
                    </small>

                    <h3 className="text-2xl">{event.title}</h3>

                    {event.time != '09:00 - 12:00' ? (
                        <>
                            <strong className="text-sm font-bold">{event.location}</strong>
                            <p className="dark:text-gray-400">{event.description}</p>
                        </>
                    ) : null}
                </section>
            ))}
        </main>
    );
};

export default ComingEvents;
