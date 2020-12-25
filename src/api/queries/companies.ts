import { gql } from '@apollo/client';
import { Company } from '../../generated/graphql';

export const ALL_COMPANIES = gql`
    query {
        companies {
            _id
            name
            events {
                _id
                title
                time
                location {
                    lat
                    lng
                    name
                }
                description
            }
            colors {
                primary
                secondary
            }
        }
    }
`;

export const COMPANY = gql`
    query($_id: String!) {
        company(_id: $_id) {
            _id
            name
            colors {
                primary
                secondary
            }
            description
            events {
                _id
                title
                time
                location {
                    name
                    lat
                    lng
                }
                description
            }
        }
    }
`;

export type AllCompanies = {
    companies: Array<Company>;
};

export type SpecificCompany = {
    company: Pick<Company, '_id' | 'name' | 'colors' | 'description' | 'events'>;
};
