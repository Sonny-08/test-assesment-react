import React, { useState } from "react";
import UserServices from "../../services/users/UserServices";
import { useNavigate } from "react-router-dom";
import FormUser from "../components/AddUserPage/FormUser";

const AddUserPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [bornDate, setBornDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addUser = async (data) => {
    setError(false);
    setErrorMsg([]);
    setSuccess(false);
    setLoading(true);
    try {
      const res = await UserServices.add_user(data);
      if (res.data.message === "success") {
        setSuccess(true);
        setName("");
        setAddress("");
        setGender("");
        setBornDate("");
      }
    } catch (error) {
      setError(true);
      const arrMessage = [];
      const errorMessage = error.response.data.detail;
      for (const index in errorMessage) {
        if (errorMessage[index].name !== undefined) {
          for (const item in errorMessage[index].name) {
            arrMessage.push(errorMessage[index].name[item]);
          }
        }
        if (errorMessage[index].address !== undefined) {
          for (const item in errorMessage[index].address) {
            arrMessage.push(errorMessage[index].address[item]);
          }
        }
        if (errorMessage[index].gender !== undefined) {
          for (const item in errorMessage[index].gender) {
            arrMessage.push(errorMessage[index].gender[item]);
          }
        }
        if (errorMessage[index].born_date !== undefined) {
          for (const item in errorMessage[index].born_date) {
            arrMessage.push(errorMessage[index].born_date[item]);
          }
        }
      }
      setErrorMsg(arrMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validate =
      name !== "" && address !== "" && gender !== "" && bornDate !== "";
    const data = {
      name: name,
      address: address,
      gender: gender,
      born_date: bornDate,
    };
    if (validate) {
      addUser(data);
    }
  };

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div style={{ width: "500px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>Form Add User</h1>
          {error &&
            errorMsg.length > 0 &&
            errorMsg.map((el, i) => {
              return (
                <>
                  <p style={{ textAlign: "center", color: "red" }} key={i}>
                    {el}
                  </p>
                </>
              );
            })}
          {success && (
            <>
              <p style={{ textAlign: "center", color: "green" }}>
                Data Berhasil Ditambahkan
              </p>
            </>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FormUser
              name={name}
              address={address}
              gender={gender}
              bornDate={bornDate}
              handleSubmit={handleSubmit}
              handleBackHome={handleBackHome}
              setName={setName}
              setAddress={setAddress}
              setGender={setGender}
              setBornDate={setBornDate}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddUserPage;
