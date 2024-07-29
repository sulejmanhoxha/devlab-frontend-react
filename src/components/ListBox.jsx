import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React from "react";

import styles from "../css/Listbox.module.css";

const ListboxComponent = ({
  people,
  selectedPeople,
  setSelectedPeople,
  handleRemovePerson,
}) => {
  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      {({ open }) => (
        <>
          <ListboxButton className={styles.listboxSelected}>
            <span className={styles.listboxFilterText}>Filter</span>
            <span
              className={`${styles.listboxArrowIcon} ${open ? styles.rotate180 : ""}`}
            >
              <ChevronDownIcon />
            </span>
          </ListboxButton>
          <ListboxOptions
            className={open ? styles.listboxOptionsOpen : ""}
            anchor="bottom"
          >
            {people.map((person) => (
              <ListboxOption
                key={person.id}
                value={person}
                className={styles.listboxOption}
              >
                <span className={styles.listboxOptionText}>{person.name}</span>
                {selectedPeople.some((p) => p.id === person.id) && (
                  <div className={styles.listboxOptionIcons}>
                    <CheckIcon className={styles.listboxOptionCheckIcon} />
                    <XMarkIcon
                      className={styles.listboxOptionXIcon}
                      onClick={() => handleRemovePerson(person)}
                    />
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </>
      )}
    </Listbox>
  );
};

export default ListboxComponent;
