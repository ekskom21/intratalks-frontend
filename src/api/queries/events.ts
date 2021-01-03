import { gql } from '@apollo/client';
import { Event } from '../../generated/graphql';
import EventF from '../fragments/Event';

export const ALL_EVENTS = gql`
    query {
        events {
            ...allFields
        }
    }

    ${EventF.fragments.allFields}
`;

export type AllEvents = {
    events: Array<Event>;
};
