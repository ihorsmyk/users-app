import PropTypes from "prop-types";
import "./UserItem.scss";

const UserItem = ({ name, surname, email, phone, subscription }) => {
  return (
    <li className="users__item">
      <h2 className="users__name">
        {name} {surname}
      </h2>
      <p className="users__email">
        <span className="users__hint">email: </span>
        {email}
      </p>
      <p className="users__phone">
        <span className="users__hint">phone: </span>
        {phone}
      </p>
      <p className="users__subscription">
        <span className="users__hint">subscription: </span>
        {subscription}
      </p>
    </li>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  subscription: PropTypes.string.isRequired,
};

export default UserItem;
