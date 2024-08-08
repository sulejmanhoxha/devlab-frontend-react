import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getPets } from "../lib/pets/pets";
import { useAuth } from "./useAuth";

export function usePets() {
  const queryClient = useQueryClient();

  const { accessToken } = useAuth();

  const petsQuery = useQuery({
    queryKey: ["pets"],
    queryFn: getPets(accessToken),
    enabled: !!accessToken,
  });

  // if you want to return more tham one thing, place all the things you want
  // to return in an object {petsQuery, something, anotherthing }
  // do not forget when using usePets to destructure the object
  return { petsQuery };
}
