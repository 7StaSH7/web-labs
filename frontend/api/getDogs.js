import { baseUrl } from "./index";

export const getDogs = async () => {
  const res = await fetch(`${baseUrl}/cards/dogs`);
  return await res.json();
};
