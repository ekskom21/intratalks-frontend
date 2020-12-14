import { createContext, useContext } from 'react';

export const SignedInCtx = createContext(false);

export const useSignedIn = (): boolean => useContext(SignedInCtx);
