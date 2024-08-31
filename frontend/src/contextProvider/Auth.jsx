import React, { useContext, useState } from "react";

// Context for storing auth info. Not "public" as we want to control access to this (through the below components / hooks).
const AuthContext = React.createContext(null);
export function useAuth() {
  const { role, setRole } = useContext(AuthContext);
  return { role, setRole };
}
/**
 * Wrap your app in this provider to enable auth functionality.
 */
export function AuthContextProvider({ children }) {
  const [role, setRole] = useState();
  const context = { role, setRole };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
