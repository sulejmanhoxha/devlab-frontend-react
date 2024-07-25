import {
  Description,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronDownIcon, PlusIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function ListBoxFilter() {
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const selectedIds = selectedPeople.map((person) => person.name).join(",");
    if (selectedIds) {
      searchParams.set("selectedPeople", selectedIds);
    } else {
      searchParams.delete("selectedPeople");
    }
    setSearchParams(searchParams);
  }, [selectedPeople]);

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <ListboxButton as={Fragment}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex w-full items-center justify-between rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-start text-[17px] font-medium text-white"
        >
          {selectedPeople.length === 0
            ? "Any"
            : `Selected (${selectedPeople.length})`}

          <ChevronDownIcon className="size-5 transition group-data-[open]:rotate-180" />
        </motion.button>
      </ListboxButton>

      <ListboxOptions
        className="w-60 origin-top divide-y rounded-md border bg-white p-1 shadow transition duration-200 ease-out [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 sm:[--anchor-gap:8px]"
        anchor="bottom end"
        transition
      >
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="group flex cursor-pointer items-center gap-2 rounded-md bg-white px-2 py-2 data-[focus]:bg-blue-200"
          >
            <CheckIcon className="invisible size-3.5 group-data-[selected]:visible" />
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListBoxFilter;
