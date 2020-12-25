import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to={`/company/${company._id}`} key={company._id}>
                    <Company company={company} />
                </Link>
            ))}
        </>
    );
};

export default Companies;
