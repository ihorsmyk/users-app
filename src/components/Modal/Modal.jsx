import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import { addUser } from "../../API/usersAPI";
import { Context } from "../../context";
import "./Modal.scss";

const modalContainer = document.getElementById("modal");

const Modal = ({ onCloseModal }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    subscription: "no",
  });
  const { makeRequest } = useContext(Context);

  const addNewUser = async (user) => {
    try {
      const data = await addUser(user);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal();
    addNewUser(formData);
    makeRequest();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, id: nanoid() }));
  };

  useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onCloseModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  const jsx = (
    <div className="overlay" onClick={handleBackdropClick}>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          name:
          <input
            className="form__input"
            autoComplete="off"
            type="text"
            name="name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          surname:
          <input
            className="form__input"
            autoComplete="off"
            type="text"
            name="surname"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          email:
          <input
            className="form__input"
            autoComplete="off"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          phone:
          <input
            className="form__input"
            autoComplete="off"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          subscription type:
          <select
            className="form__input"
            name="subscription"
            value={formData.subscription}
            onChange={handleInputChange}
          >
            <option value="no">no subscription</option>
            <option value="standard">standard</option>
            <option value="premium">premium</option>
          </select>
        </label>
        <button className="form__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );

  return createPortal(jsx, modalContainer);
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
