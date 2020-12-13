import { gql } from '@apollo/client';
import { EventWithCompany } from '../../generated/graphql';

export const EVENT = gql`
    query($_id: ID!) {
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
            }
        }
    }
`;

export type SpecificEvent = {
    event: Pick<EventWithCompany, 'event' | 'company'>;
};
