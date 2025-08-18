import { useState, useContext, createContext, useEffect, use } from "react";
import AuthService from "../services/auth.service";
import TokenService from "../services/token.service";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser);

  const login = async (user) => setUser(user);
  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  function getUser() {
    const currentUeer = TokenService.getUser();
    return currentUeer;
  }
  useEffect(() => {
    TokenService.setUser(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
