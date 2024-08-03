import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { motion } from "framer-motion";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Fragment } from "react";

function ListBoxFilter({ list, selectedList, setSelectedList }) {
  return (
    <Listbox value={selectedList} onChange={setSelectedList} multiple>
      <ListboxButton as={Fragment}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex w-full items-center justify-between rounded-md border bg-gray-100 px-4 py-2 text-start text-[17px] font-medium dark:bg-gray-700 dark:text-white"
        >
          {selectedList.length === 0
            ? "Any"
            : `Selected (${selectedList.length})`}

          <ChevronDownIcon className="size-5 transition group-data-[open]:rotate-180" />
        </motion.button>
      </ListboxButton>

      <ListboxOptions
        className="w-60 origin-top divide-y rounded-md border bg-white p-1 shadow transition duration-200 ease-out [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-gray-700 dark:text-white sm:[--anchor-gap:8px]"
        anchor="bottom end"
        transition
      >
        {list.map((item) => (
          <div key={item.id}>
            <ListboxOption
              value={item}
              className="group flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 data-[focus]:bg-blue-200"
            >
              <CheckIcon className="invisible size-3.5 group-data-[selected]:visible" />
              {item.name}
            </ListboxOption>
          </div>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default ListBoxFilter;
