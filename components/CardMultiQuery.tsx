import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useSuspenseQueries,
  useSuspenseQuery,
  useQueries,
} from "@tanstack/react-query";
import createPostsQueryOptions from "../api/createPostsQueryOptions";
import createUsersQueryOptions from "../api/createUsersQueryOptions";
// import createCommentsQueryOptions from "../api/createCommentsQueryOptions";

const Card = () => {
  // const {{data}, result2, result3 } = useSuspenseQueries({
  //   queries: [
  //     createPostsQueryOptions(),
  //     createUserseryOptions(),
  //     createCommentsQueryOptions(),
  //   ],
  // });

  const { data: users } = useQuery(createUsersQueryOptions());

  const randomId = Math.floor(Math.random() * users.length);

  // finche non esite  enabled: !!users, la query non viene eseguita , !! è un cast booleano
  // usando useSuspenseQuery la query viene eseguita solo quando users non è undefined e possiamo eliminare la condizione
  const { data: pots, isPending } = useQuery({
    ...createPostsQueryOptions(randomId),
    enabled: !!users,
  });

  return (
    <div className="container mx-auto space-y-3 ">
      <h2 className="mt-3 font-bold text-2xl ">Post</h2>
      <div className="grid grid-cols-3 gap-4">
        {data ? (
          data.map((post: any) => (
            <div
              key={post.id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
            </div>
          ))
        ) : (
          <div>Nessun post trovato.</div>
        )}
      </div>
    </div>
  );
};

export default Card;
