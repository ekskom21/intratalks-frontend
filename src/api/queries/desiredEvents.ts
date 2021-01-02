import { gql } from '@apollo/client';
import { UserInterest } from '../../generated/graphql';

export const DESIRED_EVENTS = gql`
    query {
        desiredEvents {
            user_id
            breakfast
            lunch
            dinner
        }
    }
`;

export type DesiredEvents = { desiredEvents: UserInterest };
