import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { useGlobalContext } from "../context/GlobalContext";
import { createPet, getPetDetails, getPets } from "../lib/pets/pets";

export function usePets(id) {
  const queryClient = useQueryClient();

  const { accessToken } = useGlobalContext();

  const petsQuery = useQuery({
    queryKey: ["pets"],
    queryFn: () => getPets(accessToken),
    enabled: !!accessToken,
  });

  const petDetailsQuery = useQuery({
    queryKey: ["pets", id],
    queryFn: () => getPetDetails(id, accessToken),
    enabled: !!id && id !== undefined && !!accessToken,
  });

  const createPetMutation = useMutation({
    mutationFn: ({ data, accessToken }) => createPet(data, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries("pets");
      navigate("/pets");
    },
  });

  const updatePetMutation = useMutation({
    mutationFn: ({ data, id, accessToken }) => createPet(data, id, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries("pets");
      navigate("/pets");
    },
  });

  // if you want to return more tham one thing, place all the things you want
  // to return in an object {petsQuery, something, anotherthing }
  // do not forget when using usePets to destructure the object
  return { petsQuery, petDetailsQuery, createPetMutation, updatePetMutation };
}
