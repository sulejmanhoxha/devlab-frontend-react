import React from "react";

import stylesModal from "./adoptModal.module.css";

function Modal({ closeModal }) {
  return (
    <div className={stylesModal.modalBackground}>
      <div className={stylesModal.modalContainer}>
        <div className={stylesModal.titleCloseBtn}>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className={stylesModal.title}>
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className={stylesModal.body}>
          <p>
            The next page is awesome! You should move forward, you will enjoy
            it.
          </p>
        </div>
        <div className={stylesModal.footer}>
          <button
            onClick={() => closeModal(false)}
            className={stylesModal.cancelBtn}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
