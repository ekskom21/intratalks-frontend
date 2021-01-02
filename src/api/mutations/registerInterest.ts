import { gql } from '@apollo/client';
import { Event } from '../../generated/graphql';

export const REGISTER_INTEREST = gql`
    mutation($event_id: String!) {
        registerInterest(event_id: $event_id) {
            title
            description
        }
    }
`;

export type RegisterInterest = {
    registerInterest: Event;
};
