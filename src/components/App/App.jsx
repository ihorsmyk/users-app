import { useEffect, useState } from "react";
import { Context } from "../../context";
import Header from "../Header/Header";
import UserList from "../UserList/UserList";
import Loader from "../Loader/Loader";
import { getUsers } from "../../API/usersAPI";
import { Notify } from "notiflix";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      setIsLoading(true);
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    makeRequest();
  }, []);

  useEffect(() => {
    if (!error) return;

    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <Context.Provider
      value={{
        makeRequest,
      }}
    >
      <>
        {isLoading && <Loader />}
        <Header />
        <UserList users={users} />
      </>
    </Context.Provider>
  );
}

export default App;
