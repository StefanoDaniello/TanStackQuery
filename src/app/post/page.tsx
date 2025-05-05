"use client";
import React, { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { fetchPosts } from "../../../api/posts";

export default function Page() {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // staleTime: Infinity,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // Suspance
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Caricamento...
      </div>
    );
  // Error
  if (error) return <div>Errore: {(error as Error).message}</div>;

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
}
