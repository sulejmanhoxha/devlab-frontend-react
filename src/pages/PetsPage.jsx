import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { Card } from "../components/Card";
import "../css/Listbox.css";
import { usePets } from "../hooks/usePets";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const PetsPage = () => {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  const handleRemovePerson = (person) => {
    setSelectedPeople(selectedPeople.filter((p) => p.id !== person.id));
  };

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
          <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
            <ListboxButton className="listbox-selected">
              {selectedPeople.map((person) => person.name).join(", ")}
            </ListboxButton>
            <ListboxOptions anchor="bottom">
              {people.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="listbox-option"
                >
                  <span className="listbox-option-text">{person.name}</span>
                  {selectedPeople.some((p) => p.id === person.id) && (
                    <div className="listbox-option-icons">
                      <CheckIcon className="listbox-option-check-icon" />
                      <XMarkIcon
                        className="listbox-option-x-icon"
                        onClick={() => handleRemovePerson(person)}
                      />
                    </div>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>

          <div className="grid flex-1 grid-cols-2 gap-4">
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
