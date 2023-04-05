import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [nameUser, setNameUser] = useState("");

  return (
    <AuthContext.Provider value={{ nameUser, setNameUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
