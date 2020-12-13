import { gql } from '@apollo/client';
import { EventWithCompany } from '../../generated/graphql';

export const EVENTS = gql`
    query {
        events {
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

export type Events = { events: Array<EventWithCompany> };
