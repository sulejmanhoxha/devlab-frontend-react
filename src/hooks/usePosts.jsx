import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getPosts } from "../lib/posts/posts";

export function usePosts() {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  // if you want to return more tham one thing, place all the things you want
  // to return in an object {petsQuery, something, anotherthing }
  // do not forget when using usePets to destructure the object
  return { postsQuery };
}
