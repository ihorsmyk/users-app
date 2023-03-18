import { useState } from "react";
import Modal from "../Modal/Modal";
import "./ButtonAdd.scss";

const ButtonAdd = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <button className="button-add" type="button" onClick={toggleModal}>
        Add new user
      </button>

      {showModal && <Modal onCloseModal={toggleModal} />}
    </>
  );
};

export default ButtonAdd;
