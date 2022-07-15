import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

function Signout() {
  const [userSignout, setuserSignout] = useState([]);

  const userSignoutDetails = () => {
    axios
      .post("http://localhost:4000/api/users/user-signout?uuid=USER-E23FFA42CC")
      .then((res) => {
        console.log("result_user:", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(userSignout);

  useEffect(() => {
    userSignoutDetails();
  }, []);

  return (
    <div>
      <h4>Signout Successfull</h4>
    </div>
  );
}

export default Signout;
