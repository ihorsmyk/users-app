import axios from "axios";

const usersAPI = axios.create({
  baseURL: "http://localhost:3001/users",
});

export const getUsers = async () => {
  const { data } = await usersAPI.get();
  return data;
};

export const addUser = async ({
  name,
  surname,
  email,
  phone,
  subscription,
}) => {
  const { data } = await usersAPI.post("", {
    name,
    surname,
    email,
    phone,
    subscription,
  });
  return data;
};
