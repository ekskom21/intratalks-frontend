import { gql } from '@apollo/client';
import { Company, Event } from '../../generated/graphql';

export const EVENT = gql`
    query($_id: String!) {
        event(_id: $_id) {
            event {
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
            company {
                _id
                name
                colors {
                    primary
                    secondary
                }
                description
            }
        }
    }
`;

export type SpecificEvent = {
    event: {
        event: Event;
        company: Pick<Company, '_id' | 'colors' | 'description' | 'name'>;
    };
};
