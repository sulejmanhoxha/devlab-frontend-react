import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ListboxComponent from "./ListBoxFilter";

const sortOptions = [
  { id: 1, name: "Name (A-Z)" },
  { id: 2, name: "Name (Z-A)" },
  { id: 3, name: "Age (Oldest first)" },
  { id: 4, name: "Age (Youngest first)" },
];

const filterOptions = {
  category: [
    { id: 1, name: "Dogs" },
    { id: 2, name: "Cats" },
    { id: 3, name: "Birds" },
  ],
  age: [
    { id: 1, name: "Adult" },
    { id: 2, name: "Young" },
    { id: 3, name: "Baby" },
  ],
  gender: [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ],
  size: [
    { id: 1, name: "Small" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Large" },
  ],
  color: [
    { id: 1, name: "White" },
    { id: 2, name: "Black" },
    { id: 3, name: "Brown" },
    { id: 4, name: "Gray" },
  ],
  coatLength: [
    { id: 1, name: "Short" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Long" },
  ],
};

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialSelected = useCallback(
    (param, options) => {
      const selected = searchParams.get(param)?.split(",") || [];
      return options.filter((option) => selected.includes(option.name));
    },
    [searchParams],
  );

  const updateSearchParams = useCallback(
    (paramName, selectedList) => {
      const queryList = selectedList.map((item) => item.name).join(",");
      if (queryList) {
        searchParams.set(paramName, queryList);
      } else {
        searchParams.delete(paramName);
      }
    },
    [searchParams],
  );

  const [selectedSort, setSelectedSort] = useState(
    getInitialSelected("sort", sortOptions),
  );

  const [selectedFilters, setSelectedFilters] = useState({
    category: getInitialSelected("category", filterOptions.category),
    age: getInitialSelected("age", filterOptions.age),
    gender: getInitialSelected("gender", filterOptions.gender),
    size: getInitialSelected("size", filterOptions.size),
    color: getInitialSelected("color", filterOptions.color),
    coatLength: getInitialSelected("coatLength", filterOptions.coatLength),
  });

  useEffect(() => {
    fetchPets();
  }, [searchParams]);

  const fetchPets = () => {
    updateSearchParams("sort", selectedSort);
    Object.entries(selectedFilters).forEach(([param, selectedList]) => {
      updateSearchParams(param, selectedList);
    });
    setSearchParams(searchParams);

    console.log("Fetching pets with params:", searchParams.toString());
  };

  return (
    <div className="mb-8 w-full md:mb-0 md:max-w-60">
      <FilterOption title="Search">
        <div className="flex items-center gap-2">
          <input className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <button className="whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white">
            <Search />
          </button>
        </div>
      </FilterOption>

      <FilterOption title="Sort">
        <ListboxComponent
          list={sortOptions}
          selectedList={selectedSort}
          setSelectedList={setSelectedSort}
        />
      </FilterOption>

      <FilterOption title="Filters">
        <div className="space-y-3">
          {Object.entries(filterOptions).map(([filterType, options]) => (
            <div key={filterType}>
              <h3 className="mb-1 text-sm font-medium tracking-wide">
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </h3>
              <ListboxComponent
                list={options}
                selectedList={selectedFilters[filterType]}
                setSelectedList={(newSelection) =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    [filterType]: newSelection,
                  }))
                }
              />
            </div>
          ))}
          <button
            onClick={fetchPets}
            className="w-full whitespace-nowrap rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 font-medium text-white"
          >
            Filter
          </button>
        </div>
      </FilterOption>
    </div>
  );
};

export default Filters;

const FilterOption = ({ title, children }) => {
  return (
    <Disclosure as="div" className="mb-4" defaultOpen>
      {({ open }) => (
        <>
          <DisclosureButton className="group flex w-full items-center justify-between text-3xl">
            {title}
            <ChevronDown
              className={`w-5 transition ${open ? "rotate-180" : ""}`}
            />
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel
                  as={motion.div}
                  static
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  {children}
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
};
