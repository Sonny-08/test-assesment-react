import axios from "axios";

const config = {
  baseURL: "https://cms-admin.ihsansolusi.co.id/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzk0Njg4NTgsImlhdCI6MTY3OTM4MjQ1OCwic3ViIjo0OX0.hF8GUQtYLfMZxtxLpEuiFn_0ovhQ-V2rW32ioWLF79A",
  },
  "Content-Type": "application/json",
};

const AUTH_API = axios.create(config);

export default AUTH_API;
