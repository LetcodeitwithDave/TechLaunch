import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../src/authcontext/authcontext";

function Know() {
  const [userData, setUserData] = useState({
    account: [],
    email: "",
  });

  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const fetchData = async (e) => {
    try {
      const response = await fetch("http://localhost:8000/api/account", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${isAuthenticated.access}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log("result -> ", result);

        setUserData(result);

        console.log("user data => ", userData);
        console.log("it worked well");
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>List of account from database </h1>

      <br /> */}

      <ul>
        {userData.account.map((account) => (
          <div key={account.id}>
            <li>firstname : {account.firstname}</li>
            <li>lastname : {account.lastname}</li>
            <li>password : {account.password}</li>
            <li>general email : {account.email}</li>
            <br />
          </div>
        ))}
      </ul>

      <li>authenticated email : {userData.email}</li>
    </div>
  );
}

export default Know;
