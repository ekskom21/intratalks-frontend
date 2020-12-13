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

export type AllCompanies = {
    companies: Array<Pick<Company, '_id' | 'name' | 'colors'>>;
};
