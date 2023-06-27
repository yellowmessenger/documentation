import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./popularsearches.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const IFrameModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.botContainer}>
          <iframe
            src="https://cloud.yellow.ai/pwa/v2/live/x1634118728207"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </div>
      </Modal>
    </div>
  );
};

export default IFrameModal;
