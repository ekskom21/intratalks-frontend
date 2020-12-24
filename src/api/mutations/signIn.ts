import { gql } from '@apollo/client';
import { Tokens } from '../../generated/graphql';

export const SIGN_IN = gql`
    mutation($code: String!) {
        signIn(code: $code) {
            access_token
            id_token
            refresh_token
            expires_in
        }
    }
`;

export type SignInResponse = {
    signIn: Tokens;
};
