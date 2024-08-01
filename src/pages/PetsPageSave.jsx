import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Card } from "../components/Card";
import ListboxComponent from "../components/ListBox";
import styles from "../css/Listbox.module.css";
import "../css/base.css";
import { usePets } from "../hooks/usePets";

const category = [
  { id: 1, name: "Dogs" },
  { id: 2, name: "Cats" },
  { id: 3, name: "Birds" },
];

const age = [
  { id: 1, name: "Adult" },
  { id: 2, name: "Young" },
  { id: 3, name: "Baby" },
];

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
];

const size = [
  { id: 1, name: "Small" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Large" },
];

const color = [
  { id: 1, name: "White" },
  { id: 2, name: "Black" },
  { id: 3, name: "Brown" },
  { id: 4, name: "Gray" },
];

const coatLength = [
  { id: 1, name: "Short" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Long" },
];

const PetsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialSelected = (param, options) => {
    const selected = searchParams.get(param)?.split(",") || [];
    return options.filter((option) => selected.includes(option.name));
  };

  const [selectedColor, setSelectedColor] = useState(
    getInitialSelected("color", color),
  );
  const [selectedCoatLength, setSelectedCoatLength] = useState(
    getInitialSelected("coatLength", coatLength),
  );
  const [selectedAge, setSelectedAge] = useState(
    getInitialSelected("age", age),
  );
  const [selectedGender, setSelectedGender] = useState(
    getInitialSelected("gender", gender),
  );
  const [selectedSize, setSelectedSize] = useState(
    getInitialSelected("size", size),
  );
  const [selectedCategory, setSelectedCategory] = useState(
    getInitialSelected("category", category),
  );

  const { petsQuery } = usePets();

  const updateSearchParams = (paramName, selectedList) => {
    const queryList = selectedList.map((item) => item.name).join(",");
    if (queryList) {
      searchParams.set(paramName, queryList);
    } else {
      searchParams.delete(paramName);
    }
  };

  useEffect(() => {
    updateSearchParams("color", selectedColor);
    updateSearchParams("coatLength", selectedCoatLength);
    updateSearchParams("age", selectedAge);
    updateSearchParams("gender", selectedGender);
    updateSearchParams("size", selectedSize);
    updateSearchParams("category", selectedCategory);

    setSearchParams(searchParams);
  }, [
    selectedColor,
    selectedCoatLength,
    selectedAge,
    selectedGender,
    selectedSize,
    selectedCategory,
  ]);

  return (
    <div className={`${styles.mainContainer} mainConatiner1`}>
      <div className={styles.flexContainer}>
        <div className={`${styles.fillterContainer} mainfillter1`}>
          <h2>Filters</h2>
          <h3>Color</h3>
          <ListboxComponent
            list={color}
            selectedList={selectedColor}
            setSelectedList={setSelectedColor}
          />

          <h3>Coat Length</h3>
          <ListboxComponent
            list={coatLength}
            selectedList={selectedCoatLength}
            setSelectedList={setSelectedCoatLength}
          />

          <h3>Age</h3>
          <ListboxComponent
            list={age}
            selectedList={selectedAge}
            setSelectedList={setSelectedAge}
          />

          <h3>Gender</h3>
          <ListboxComponent
            list={gender}
            selectedList={selectedGender}
            setSelectedList={setSelectedGender}
          />

          <h3>Size</h3>
          <ListboxComponent
            list={size}
            selectedList={selectedSize}
            setSelectedList={setSelectedSize}
          />

          <h3>Category</h3>
          <ListboxComponent
            list={category}
            selectedList={selectedCategory}
            setSelectedList={setSelectedCategory}
          />

          <button className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white">
            Filter
          </button>
        </div>

        {petsQuery.isLoading && <h2>Loading...</h2>}

        {petsQuery.error && <h2>Error: {petsQuery.error.message}</h2>}

        {petsQuery.isSuccess && (
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
        )}
      </div>
    </div>
  );
};

export default PetsPage;
