import React from "react";

const FormUser = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label>
            Nama:
            <input
              style={{ marginLeft: "8px" }}
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              required
              min={8}
            />
          </label>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label>
            Alamat:
            <input
              style={{ marginLeft: "8px" }}
              type="text"
              value={props.address}
              onChange={(e) => props.setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <span>Jenis Kelamin</span>
          <label>
            <input
              type="radio"
              name={props.gender}
              value="l"
			  checked={props.gender === "l"}
              onChange={(e) => props.setGender(e.target.value)}
            />
            Pria
          </label>
          <label>
            <input
              type="radio"
              name={props.gender}
              value="p"
			  checked={props.gender === "p"}
              onChange={(e) => props.setGender(e.target.value)}
            />
            Wanita
          </label>
        </div>
        <div style={{ marginBottom: "8px" }}>
          <label>
            Tanggal Lahir:
            <input
              style={{ marginLeft: "8px" }}
              type="date"
              value={props.bornDate}
              onChange={(e) => props.setBornDate(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" />
        <button
          style={{
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={props.handleBackHome}
        >
          Kembali ke Home
        </button>
      </form>
    </>
  );
};

export default FormUser;
