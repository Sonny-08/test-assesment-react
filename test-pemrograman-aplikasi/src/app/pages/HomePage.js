import React, { useEffect, useState } from "react";
import UserServices from "../../services/users/UserServices";
import UserList from "../components/HomePage/UserList";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(false);
  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await UserServices.user_list();
      if (res.data.message === "success") {
        setData(res.data.data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userid) => {
    setLoading(true);
    try {
      const res = await UserServices.delete_user(userid);
      if (res.data.message === "success") {
        setData(res.data.data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleDeleteUser = (userId) => {
    if (window.confirm(`Apakah anda yakin ?`)) {
      deleteUser(userId);
      getUsers();
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <UserList dataUser={data} handleDeleteUser={handleDeleteUser} />
        </div>
      )}
    </>
  );
};

export default HomePage;
