import PropTypes from "prop-types";
import UserItem from "../UserItem/UserItem";
import './UserList.scss'

const UserList = ({ users }) => {
  return (
    <div className="container">
      <ul className="users">
        {Array.isArray &&
          users?.map(({ id, name, surname, email, phone, subscription }) => {
            return (
              <UserItem
                key={id}
                name={name}
                surname={surname}
                email={email}
                phone={phone}
                subscription={subscription}
              />
            );
          })}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      subscription: PropTypes.string.isRequired,
    })
  ),
};

export default UserList;
