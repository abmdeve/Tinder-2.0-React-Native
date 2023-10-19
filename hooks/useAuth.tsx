import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";

export interface AuthProviderProps {
  children: any;
}

const AuthContext = createContext({
  // initial state
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
<AuthContext.Provider value={{user: 'Sonny'}}>
    {children}
</AuthContext.Provider>
);
};

export default function useAuth() {
    return useContext(AuthContext);
}
