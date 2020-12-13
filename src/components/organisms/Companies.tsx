import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import Company from '../molecules/Company';

const Companies: React.FC = () => {
    const { data } = useQuery<AllCompanies>(ALL_COMPANIES);

    if (!data) {
        return <span>Loading...</span>;
    }

    return (
        <main className={classNames('p-4')}>
            {data.companies.map((company) => (
                <Company key={company._id} company={company} />
            ))}
        </main>
    );
};

export default Companies;
