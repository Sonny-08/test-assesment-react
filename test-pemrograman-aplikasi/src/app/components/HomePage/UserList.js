import React from "react";
import "./UserList.css";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const UserList = (props) => {
  const navigate = useNavigate();
  const handleAddUser = () => {
    navigate("/add");
  };
  const handleFormatBorndate = (date) => {
    return moment(date).format("DD MMM, YYYY");
  };
  const handleFormatCreatedDate = (date) => {
    return moment(date).format("DD MMM YYYY hh:mm");
  };
  const handleFormatGender = (gender) => {
    return gender === "l" ? "Pria": "Wanita";
  };
  const handleViewUser = (userId) => {
    navigate(`/view/${userId}`);
  };
  const handleEditUser = (userId) => {
    navigate(`/edit/${userId}`);
  };
//   const handleDeleteUser = (userId) => {
// 	window.confirm("Apakah anda yakin ?")
//   };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Assesment Test
        </h1>
        <button style={{ marginBottom: "16px" }} onClick={handleAddUser}>
          Tambah User
        </button>
        <table id="user">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>P/W</th>
            <th>Tanggal Lahir</th>
            <th>Tanggal Input</th>
            <th>Aksi</th>
          </tr>
          {props.dataUser &&
            props.dataUser.map((el, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{el.name}</td>
                    <td>{el.address}</td>
                    <td>{handleFormatGender(el.gender)}</td>
                    <td>{handleFormatBorndate(el.born_date)}</td>
                    <td>{handleFormatCreatedDate(el.created_at)}</td>
                    <td>
                      <button onClick={()=>(handleViewUser(el.id))}>View</button>
                      <button style={{ marginLeft: "4px" }} onClick={()=>(handleEditUser(el.id))}>Edit</button>
                      <button style={{ marginLeft: "4px" }} onClick={()=>(props.handleDeleteUser(el.id))}>Delete</button>
                    </td>
                  </tr>
                </>
              );
            })}
        </table>
      </div>
    </>
  );
};

export default UserList;
