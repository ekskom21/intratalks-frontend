import { gql } from '@apollo/client';
import { Company } from '../../generated/graphql';

export const COMPANY = gql`
    query($_id: String!) {
        company(_id: $_id) {
            _id
            name
            description
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

export type CompanyDetails = {
    company?: Company;
};
