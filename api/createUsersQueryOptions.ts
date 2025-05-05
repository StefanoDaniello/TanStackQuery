import { queryOptions } from "@tanstack/react-query";

export default function createUsersQueryOptions() {
  return queryOptions({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnWindowFocus: false,
  });
}

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Errore nel recupero dei post");

  const data = await res.json();
  console.log("FETCHED POSTS:", data);
  return data;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
