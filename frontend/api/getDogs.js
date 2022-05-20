export const getDogs = async () => {
  const res = await fetch("http://localhost:5000/api/cards/dogs");
  return await res.json();
};
