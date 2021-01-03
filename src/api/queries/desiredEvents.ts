import { gql } from '@apollo/client';
import { UserInterest } from '../../generated/graphql';

// NOTE: The returns for 'breakfast', 'lunch' and 'dinner' are all complete
// Events with their respective Companies, so you can show some quite
// interesting infromation without having to retrieve more data.
export const DESIRED_EVENTS = gql`
    query {
        desiredEvents {
            user_id
            breakfast {
                _id
            }
            lunch {
                _id
            }
            dinner {
                _id
            }
        }
    }
`;

export type DesiredEvents = { desiredEvents: UserInterest };
