import { gql } from '@apollo/client';
import { RegistrationState } from '../../generated/graphql';

export const USER_REGISTERED = gql`
    query {
        userRegistered
    }
`;

export type UserRegistered = {
    userRegistered: RegistrationState;
};
