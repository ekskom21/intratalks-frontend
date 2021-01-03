import { gql } from '@apollo/client';
import { Event } from '../../generated/graphql';
import EventF from '../fragments/Event';

export const EVENT = gql`
    query($_id: String!) {
        event(_id: $_id) {
            ...allFields
        }
    }

    ${EventF.fragments.allFields}
`;

export type SpecificEvent = {
    event: Event;
};
