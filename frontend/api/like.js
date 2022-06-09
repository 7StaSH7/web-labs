import { baseUrl } from "./index";

export const likeAction = async (id, action, socketId, username) => {
  const res = await fetch(`${baseUrl}/cards/${id}/act`, {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: action,
      socketId: socketId,
      username: username,
    }),
  });
  return await res.json();
};
