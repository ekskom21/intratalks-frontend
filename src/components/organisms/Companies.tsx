import classNames from 'classnames';
import React from 'react';

import Company from '../molecules/Company';

const Companies: React.FC = () => {
    const companies: { id: number; name: string; shortDescription: string; gradient: string }[] = [
        {
            id: 1,
            name: 'Bekk',
            shortDescription: 'Bekk er et konsulentfirma med over x tusen milliarder ansatte som progger osv',
            gradient: 'from-purple-400 to-red-500',
        },
        {
            id: 2,
            name: 'Capgemini',
            shortDescription: 'Capgemini er et firma',
            gradient: 'from-red-500 to-yellow-400',
        },
        {
            id: 3,
            name: 'Sopra Steria',
            shortDescription: 'Sopra Steria er et selskap med kontorer noen steder',
            gradient: 'from-blue-400 to-green-500',
        },
        // Fill out more relevant information regarding the company as you see fit.
    ];

    return (
        <main className={classNames('p-4')}>
            {companies.map((company) => (
                <Company key={company.id} company={company} />
            ))}
        </main>
    );
};

export default Companies;
