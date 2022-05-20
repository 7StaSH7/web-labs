import React, { useState, useContext, createContext, useEffect } from "react";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);

function useProvideAuth() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [error, setError] = useState("");
  const [locale, setLocale] = useState("ru");

  useEffect(() => {
    autoLogin();
    getLocale();
  }, []);

  const signUp = async (_username, _password, _email) => {
    setError("");
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
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
      setUserId(data.data.id);
      setUsername(data.data.username);
      setIsLogined(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("username", JSON.stringify(data.data.username));
        localStorage.setItem("userId", JSON.stringify(data.data.id));
      }
    }

    if (data.meta) setError(data.meta.error.message);
    if (
      window.location.pathname === "/dogs" ||
      window.location.pathname === "/cats"
    )
      window.location.reload();
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
      const userId = JSON.parse(localStorage.getItem("userId"));
      if (userId) setUserId(userId);
    }
  };
  const logout = () => {
    setError("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");

      setIsLogined(false);
      setUsername("");
    }
    if (
      window.location.pathname === "/dogs" ||
      window.location.pathname === "/cats"
    )
      window.location.reload();
  };

  const getLocale = () => {
    setError("");
    if (typeof window !== "undefined") {
      const lang = JSON.parse(localStorage.getItem("locale"));
      if (lang) setLocale(lang);
      else localStorage.setItem("locale", JSON.stringify(lang));
    }
  };

  const setLang = (lang) => {
    if (typeof window !== "undefined") {
      setLocale(lang);
      localStorage.setItem("locale", JSON.stringify(lang));
    }
  };

  return {
    userId,
    username,
    isLogined,
    error,
    locale,
    setLang,
    login,
    logout,
    signUp,
    autoLogin,
  };
}
