import React from 'react';
import SmallEvent from '../atoms/SmallEvent';

const allEvents = {
    breakfast: [
        {
            id: 0,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
            title: 'Introduksjon til Elm',
            location: 'Graffi',
        },
        {
            id: 1,
            company: { name: 'Sopra Steria', gradient: 'from-green-400 to-blue-500' },
            title: 'Lorem Ipsum',
            location: 'Graffi',
        },
        {
            id: 2,
            company: { name: 'Knowit', gradient: 'from-yellow-400 to-orange-500' },
            title: 'Dolor Sit',
            location: 'Graffi',
        },
        {
            id: 3,
            company: { name: 'Kodeworks', gradient: 'from-purple-400 to-green-500' },
            title: 'Amet Consectur',
            location: 'Graffi',
        },
        {
            id: 4,
            company: { name: 'Alv', gradient: 'from-red-400 to-purple-500' },
            title: 'Adsciptig Et',
            location: 'Graffi',
        },
    ],
    lunch: [
        {
            id: 0,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
            title: 'Introduksjon til Elm',
            location: 'Graffi',
        },
        {
            id: 1,
            company: { name: 'Bekk', gradient: 'from-green-400 to-blue-500' },
            title: 'Lorem Ipsum',
            location: 'Graffi',
        },
        {
            id: 2,
            company: { name: 'Bekk', gradient: 'from-yellow-400 to-orange-500' },
            title: 'Dolor Sit',
            location: 'Graffi',
        },
        {
            id: 3,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-green-500' },
            title: 'Amet Consectur',
            location: 'Graffi',
        },
        {
            id: 4,
            company: { name: 'Bekk', gradient: 'from-red-400 to-purple-500' },
            title: 'Adsciptig Et',
            location: 'Graffi',
        },
    ],
    dinner: [
        {
            id: 0,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-red-500' },
            title: 'Introduksjon til Elm',
            location: 'Graffi',
        },
        {
            id: 1,
            company: { name: 'Bekk', gradient: 'from-green-400 to-blue-500' },
            title: 'Lorem Ipsum',
            location: 'Graffi',
        },
        {
            id: 2,
            company: { name: 'Bekk', gradient: 'from-yellow-400 to-orange-500' },
            title: 'Dolor Sit',
            location: 'Graffi',
        },
        {
            id: 3,
            company: { name: 'Bekk', gradient: 'from-purple-400 to-green-500' },
            title: 'Amet Consectur',
            location: 'Graffi',
        },
        {
            id: 4,
            company: { name: 'Bekk', gradient: 'from-red-400 to-purple-500' },
            title: 'Adsciptig Et',
            location: 'Graffi',
        },
    ],
};

const AllEvents: React.FC = () => {
    return (
        <main className="p-4">
            <h2 className="text-3xl font-bold">Frokost</h2>
            {allEvents['breakfast'].map((ev) => (
                <SmallEvent event={ev} key={ev.id} />
            ))}

            <h2 className="text-3xl font-bold mt-4">Lunsj</h2>
            {allEvents['lunch'].map((ev) => (
                <SmallEvent event={ev} key={ev.id} />
            ))}

            <h2 className="text-3xl font-bold mt-4">Middag</h2>
            {allEvents['dinner'].map((ev) => (
                <SmallEvent event={ev} key={ev.id} />
            ))}
        </main>
    );
};

export default AllEvents;
