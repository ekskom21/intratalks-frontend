import { useQuery } from '@apollo/client';
import React from 'react';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import CompanyT from '../molecules/Company';
import LoadingAndErrorWrapper from '../molecules/LoadingAndErrorWrapper';

const Companies: React.FC = () => {
    const { data, loading, error } = useQuery<AllCompanies>(ALL_COMPANIES);

    return (
        <LoadingAndErrorWrapper loading={loading} data={data} error={error}>
            {({ companies }) => (
                <>
                    {companies.map((company) => (
                        <CompanyT key={company._id} company={company} />
                    ))}
                </>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default Companies;
