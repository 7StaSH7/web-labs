import React, { useState, useContext, createContext, useEffect } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [username, setUsername] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    autoLogin();
  });

  const signUp = async (_username, _password, _email) => {
    setError("");
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: _username,
        password: _password,
        email: _email,
      }),
    });
    const data = await res.json();
    if (data.meta) setError(data.meta.message);
    return data;
  };

  const login = async (_email, _password) => {
    setError("");
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: _email,
        password: _password,
      }),
    });
    const data = await res.json();
    if (data.data) {
      setUsername(data.data.username);
      setIsLogined(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("username", JSON.stringify(data.data.username));
      }
    }

    if (data.meta) setError(data.meta.error.message);
    return data;
  };

  const autoLogin = () => {
    setError("");
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("username"));

      if (user) {
        setIsLogined(true);
        setUsername(user);
      }
    }
  };
  const logout = () => {
    setError("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");

      setIsLogined(false);
      setUsername("");
    }
  };

  return {
    username,
    isLogined,
    error,
    login,
    logout,
    signUp,
    autoLogin,
  };
}
