import { gql } from '@apollo/client';
import { Company } from '../../generated/graphql';

export const ALL_COMPANIES = gql`
    query {
        companies {
            _id
            name
            colors {
                primary
                secondary
            }
        }
    }
`;

export const COMPANY = gql`
    query($_id: ID!) {
        company(_id: $_id) {
            name
            colors {
                primary
                secondary
            }
            description
            events {
                _id
            }
        }
    }
`;

export type AllCompanies = {
    companies: Array<Pick<Company, '_id' | 'name' | 'colors'>>;
};

export type SpecificCompany = {
    company: Pick<Company, 'name' | 'colors' | 'description' | 'events'>;
};
