import React, { useEffect, useState } from "react";
import UserServices from "../../services/users/UserServices";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const AddUserPage = () => {
  const [dataUser, setDataUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  const viewUser = async (userId) => {
    setError(false);
    setLoading(true);
    try {
      const res = await UserServices.view_user(userId);
      if (res.data.message === "success") {
        setDataUser(res.data.data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleFormatGender = (gender) => {
    return gender === "l" ? "Pria" : "Wanita";
  };

  const handleFormatBorndate = (date) => {
    return moment(date).format("DD MMM, YYYY");
  };

  useEffect(() => {
    viewUser(id);
  }, [id]);

  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div style={{ width: "500px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>Detail User</h1>
          {error && (
            <>
              <p style={{ textAlign: "center", color: "red" }}>Terjadi Error</p>
            </>
          )}
          {dataUser && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <div style={{ marginBottom: "8px" }}>
                  <div>
                    Nama:
                    <span style={{ marginLeft: "4px" }}>{dataUser.name}</span>
                  </div>
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <div>
                    Alamat:
                    <span style={{ marginLeft: "4px" }}>
                      {dataUser.address}
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <div>
                    Jenis Kelamin:
                    <span style={{ marginLeft: "4px" }}>
                      {handleFormatGender(dataUser.gender)}
                    </span>
                  </div>
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <div>
                    Tanggal Lahir:
                    <span style={{ marginLeft: "4px" }}>
                      {handleFormatBorndate(dataUser.born_date)}
                    </span>
                  </div>
                </div>
                <button
                  style={{
                    cursor: "pointer",
                    marginLeft: "4px",
                  }}
                  onClick={handleBackHome}
                >
                  Kembali ke Home
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AddUserPage;
