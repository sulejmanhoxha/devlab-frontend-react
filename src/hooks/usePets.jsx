import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";
import { createPet, deletePet, getPets, updatePet } from "../lib/pets/pets";

export function usePets() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { accessToken } = useGlobalContext();

  const petsQuery = useQuery({
    queryKey: ["pets"],
    queryFn: () => getPets(accessToken),
    enabled: !!accessToken,
  });

  const createPetMutation = useMutation({
    mutationFn: ({ data, accessToken }) => createPet(data, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries("pets");
      navigate("/pets");
    },
  });

  const updatePetMutation = useMutation({
    mutationFn: ({ data, id, accessToken }) => updatePet(data, id, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries("pets");
      navigate("/pets");
    },
  });

  const deletePetMutation = useMutation({
    mutationFn: ({ id, accessToken }) => deletePet(id, accessToken),
    onSuccess: (data) => {
      queryClient.invalidateQueries("pets");
      navigate("/pets");
    },
  });

  // if you want to return more tham one thing, place all the things you want
  // to return in an object {petsQuery, something, anotherthing }
  // do not forget when using usePets to destructure the object
  return {
    petsQuery,
    deletePetMutation,
    createPetMutation,
    updatePetMutation,
  };
}
