export const getLikedCards = async (username) => {
  const likedRaw = await fetch("http://localhost:5000/api/cards/liked", {
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
