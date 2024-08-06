import { useState } from "react";

import Modal from "./Modal";
import stylesModal from "./adoptModal.module.css";

function AdoptModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={stylesModal.app}>
      <h1>hey</h1>
      <button
        className={stylesModal.openModalBtn}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      openModal && <Modal closeModal={setOpenModal} />
    </div>
  );
}

export default AdoptModal;
