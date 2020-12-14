import { gql } from '@apollo/client';
import { Company } from '../../generated/graphql';

export const ALL_COMPANIES = gql`
    query {
        companies {
            _id
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

export type AllCompanies = {
    companies: Array<Company>;
};
