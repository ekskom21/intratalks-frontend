import { gql } from '@apollo/client';
import { AssignedEvents as AssignedEventsT } from '../../generated/graphql';
import Event from '../fragments/Event';

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

    ${Event.fragments.allFields}
`;

export type AssignedEvents = { assignedEvents: AssignedEventsT };
