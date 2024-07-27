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

import "../css/Listbox.css";

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
          <ListboxButton className="listbox-selected">
            <span className="listbox-filter-text">Filter</span>
            <span className={`listbox-arrow-icon ${open ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          </ListboxButton>
          <ListboxOptions
            className={open ? "listbox-options-open" : ""}
            anchor="bottom"
          >
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
        </>
      )}
    </Listbox>
  );
};

export default ListboxComponent;
