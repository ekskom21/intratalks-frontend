import { createContext, useContext } from 'react';
import { Tokens } from '../generated/graphql';

export const SignedInCtx = createContext<Tokens | null>(null);

export const useSignedIn = (): Tokens | null => useContext(SignedInCtx);
