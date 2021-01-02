import React from 'react';

import { useQuery } from '@apollo/client';

import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import SmallEvent from '../atoms/SmallEvent';

const AllEvents: React.FC = () => {
    const { data } = useQuery<AllCompanies>(ALL_COMPANIES);

    if (!data) return <span>Loading...</span>;

    return (
        <>
            <h2 className="title-2">Frokost</h2>
            {data.companies
                .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                .filter(({ event: { time } }) => time === 'BREAKFAST')
                .map(({ event, company }) => (
                    <SmallEvent event={event} company={company} key={event._id} />
                ))}

            <h2 className="title-2">Lunsj</h2>
            {data.companies
                .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                .filter(({ event: { time } }) => time === 'LUNCH')
                .map(({ event, company }) => (
                    <SmallEvent event={event} company={company} key={event._id} />
                ))}

            <h2 className="title-2">Middag</h2>
            {data.companies
                .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                .filter(({ event: { time } }) => time === 'DINNER')
                .map(({ event, company }) => (
                    <SmallEvent event={event} company={company} key={event._id} />
                ))}
        </>
    );
};

export default AllEvents;
