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

const ListboxComponent = ({ list, selectedList, setSelectedList }) => {
  return (
    <Listbox value={selectedList} onChange={setSelectedList} multiple>
      {({ open }) => (
        <>
          <ListboxButton
            className={`${styles.listboxSelected} listboxSelected1`}
          >
            {selectedList.length === 0
              ? "Any"
              : `Selected (${selectedList.length})`}

            <span
              className={`${styles.listboxArrowIcon} ${open ? styles.rotate180 : ""}`}
            >
              <ChevronDownIcon />
            </span>
          </ListboxButton>
          <ListboxOptions
            className={`${open ? styles.listboxOptionsOpen : ""} listboxOptionsOpen1`}
            anchor="bottom"
          >
            {list.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className={styles.listboxOption}
              >
                <span className={styles.listboxOptionText}>{item.name}</span>
                {selectedList.some((p) => p.id === item.id) && (
                  <div className={styles.listboxOptionIcons}>
                    <CheckIcon className={styles.listboxOptionCheckIcon} />
                    <XMarkIcon
                      className={styles.listboxOptionXIcon}
                      onClick={() => handleRemoveItem(item)}
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
