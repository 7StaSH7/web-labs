import { baseUrl } from "./index";

export const getLikedCards = async (username) => {
  const likedRaw = await fetch(`${baseUrl}/cards/liked`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
    }),
  });
  return await likedRaw.json();
};
