import { useState } from "react";

import { Card } from "../components/Card";
import ListboxComponent from "../components/ListBox";
import styles from "../css/Listbox.module.css";
import { usePets } from "../hooks/usePets";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

const PetsPage = () => {
  const [selectedPeople1, setSelectedPeople1] = useState([]);
  const [selectedPeople2, setSelectedPeople2] = useState([]);
  const [selectedPeople3, setSelectedPeople3] = useState([]);
  const [selectedPeople4, setSelectedPeople4] = useState([]);

  const handleRemovePerson = (person, setSelectedPeople) => {
    setSelectedPeople((prev) => prev.filter((p) => p.id !== person.id));
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
      <div className={styles.mainContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.fillterContainer}>
            <ListboxComponent
              people={people}
              selectedPeople={selectedPeople1}
              setSelectedPeople={setSelectedPeople1}
              handleRemovePerson={(person) =>
                handleRemovePerson(person, setSelectedPeople1)
              }
            />
            <ListboxComponent
              people={people}
              selectedPeople={selectedPeople2}
              setSelectedPeople={setSelectedPeople2}
              handleRemovePerson={(person) =>
                handleRemovePerson(person, setSelectedPeople2)
              }
            />
            <ListboxComponent
              people={people}
              selectedPeople={selectedPeople3}
              setSelectedPeople={setSelectedPeople3}
              handleRemovePerson={(person) =>
                handleRemovePerson(person, setSelectedPeople3)
              }
            />
            <ListboxComponent
              people={people}
              selectedPeople={selectedPeople4}
              setSelectedPeople={setSelectedPeople4}
              handleRemovePerson={(person) =>
                handleRemovePerson(person, setSelectedPeople4)
              }
            />
          </div>

          <div className={styles.petCardsContainer}>
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
