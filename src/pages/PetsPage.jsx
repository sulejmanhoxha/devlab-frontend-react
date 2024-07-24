import { Card } from "../components/Card";
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
          <div className="w-full max-w-60">
            <h1 className="text-lg font-semibold tracking-wide">Filters</h1>
            <div className="space-y-3">
              <div>
                <h2>Breed</h2>
                <p className="rounded-md border border-violet-500 bg-slate-200 px-2 py-3 font-bold">
                  Any
                </p>
              </div>

              <div>
                <h2>Age</h2>
                <p className="rounded-md border border-violet-500 bg-slate-200 px-2 py-3 font-bold">
                  Any
                </p>
              </div>

              <div>
                <h2>Size</h2>
                <p className="rounded-md border border-violet-500 bg-slate-200 px-2 py-3 font-bold">
                  Any
                </p>
              </div>

              <div>
                <h2>Gender</h2>
                <p className="rounded-md border border-violet-500 bg-slate-200 px-2 py-3 font-bold">
                  Any
                </p>
              </div>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4">
            {petsQuery.data.map((pet) => (
              <Card
                key={pet.id}
                description={pet.description}
                imgSrc={pet.images[0]}
                imgAlt={`An image for a ${pet.name}`}
                title={pet.name}
                link={`/pets/${pet.id}`}
                buttonText={"View"}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default PetsPage;
