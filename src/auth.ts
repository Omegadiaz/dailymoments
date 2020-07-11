import React, { useContext } from 'react';

export const AuthContext = React.createContext( {loggedIn:false });

export function useAuth() {
    return useContext(AuthContext);
}//Así no exponemos el contexto al otro componente