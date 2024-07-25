import { Card } from "../components/Card";
import ListBoxFilter from "../components/ListBoxFilter";
import { usePets } from "../hooks/usePets";

const PetsPage = () => {
  const { petsQuery } = usePets();

  if (petsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (petsQuery.error) {
    return <h1>Error: {petsQuery.error.message}</h1>;
  }

  if (petsQuery.isSuccess) {
    return (
      <div className="container mx-auto bg-white px-6 py-40">
        <div className="flex w-full gap-4">
          <div className="w-full max-w-60 max-md:hidden">
            <h1 className="mb-4 text-4xl">Filters</h1>
            <div className="space-y-3">
              <div>
                <h2 className="mb-1 text-sm font-medium tracking-wide">
                  Breed
                </h2>

                <ListBoxFilter />
              </div>

              <div>
                <h2 className="mb-1 text-sm font-medium tracking-wide">Age</h2>

                <ListBoxFilter />
              </div>

              <div>
                <h2 className="mb-1 text-sm font-medium tracking-wide">Size</h2>

                <ListBoxFilter />
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {petsQuery.data.map((pet) => (
              <Card
                key={pet.id}
                imgSrc={pet.images[0]}
                imgAlt={`An image for a ${pet.name}`}
                title={pet.name}
                link={`/pets/${pet.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default PetsPage;
