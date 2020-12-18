import { useQuery } from '@apollo/client';
import React from 'react';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import Company from '../molecules/Company';

const Companies: React.FC = () => {
    const { data } = useQuery<AllCompanies>(ALL_COMPANIES);

    if (!data) {
        return <span>Loading...</span>;
    }

    return (
        <>
            {data.companies.map((company) => (
                <Company key={company._id} company={company} />
            ))}
        </>
    );
};

export default Companies;
