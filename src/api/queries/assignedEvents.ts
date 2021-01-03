import { gql } from '@apollo/client';
import { AssignedEvents as AssignedEventsT } from '../../generated/graphql';

// NOTE: The returns for 'breakfast', 'lunch' and 'dinner' are all complete
// Events with their respective Companies, so you can show some quite
// interesting infromation without having to retrieve more data.
export const ASSIGNED_EVENTS = gql`
    query {
        assignedEvents {
            breakfast {
                ...allFields
            }

            lunch {
                ...allFields
            }

            dinner {
                ...allFields
            }
        }
    }

    fragment allFields on Event {
        _id
        title
        time
        location {
            lat
            lng
            name
        }
        description
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
`;

export type AssignedEvents = { assignedEvents: AssignedEventsT };
