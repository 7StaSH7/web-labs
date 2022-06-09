const isDev = process.env.ENV === "dev" ? true : false;

export const baseUrl = isDev
  ? "http://localhost:5000/api"
  : "http://194.58.119.197/api";
