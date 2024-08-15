import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { useGlobalContext } from "../../context/GlobalContext";
import { usePets } from "../../hooks/usePets";
import Filters from "./filter/Filters";

const PetsPage = () => {
  const { petsQuery, deletePetMutation } = usePets();
  const { accessToken } = useGlobalContext();

  return (
    <>
      <div className="container mx-auto bg-white px-6 py-28 md:py-40">
        <div className="w-full md:flex md:gap-12">
          <Filters />

          <div className="flex-1">
            <Link to="/pets/create" className="mb-8 ml-auto block w-fit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white"
              >
                Add your pet
              </motion.button>
            </Link>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {petsQuery.isLoading || petsQuery.isRefetching ? (
                <h1>Loading...</h1>
              ) : null}

              {petsQuery.error ? (
                <h1>Error: {petsQuery.error.message}</h1>
              ) : null}

              {petsQuery.isSuccess &&
              !petsQuery.isRefetching &&
              petsQuery.data.length > 0
                ? petsQuery.data.map((pet) => (
                    <PetCard
                      id={pet.id}
                      {...pet}
                      accessToken={accessToken}
                      deletePetMutation={deletePetMutation}
                    />
                  ))
                : null}

              {petsQuery.isSuccess &&
              !petsQuery.isRefetching &&
              petsQuery.data.length === 0 ? (
                <h1>No pets found</h1>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const PetCard = ({
  pet_id,
  pet_breed,
  pet_name,
  accessToken,
  deletePetMutation,
}) => {
  const navigate = useNavigate();

  return (
    <div key={pet_id}>
      {/* <img
        src={images[0]}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a ${pet_name}`}
      /> */}
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {pet_breed}
      </span>
      <p className="mt-1.5 text-lg font-medium">{pet_name}</p>
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-md bg-red-400 px-2 py-1 text-xs font-medium text-white"
          onClick={() => {
            deletePetMutation.mutate({ id: pet_id, accessToken: accessToken });
          }}
        >
          Delete
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-md bg-yellow-400 px-2 py-1 text-xs font-medium text-white"
          onClick={() => navigate(`/pets/${pet_id}/update`)}
        >
          Update
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-md bg-blue-400 px-2 py-1 text-xs font-medium text-white"
          onClick={() => navigate(`/pets/${pet_id}`)}
        >
          View
        </motion.button>
      </div>
      {/* <p className="line-clamp-2 text-sm text-neutral-500">{description}</p> */}
    </div>
  );
};

export default PetsPage;
