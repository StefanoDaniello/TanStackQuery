export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Errore nel recupero dei post");

  const data = await res.json();
  console.log("FETCHED POSTS:", data);
  return data;
};
