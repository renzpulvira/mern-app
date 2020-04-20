import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const [isSuccess, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    isSuccess
      ? setTimeout(() => {
          history.push("/login");
        }, 3000)
      : console.log("Page: Register");
  }, [isSuccess]);

  const handleUserName = (e) => {
    setName(e);
  };

  const handleEmail = (e) => {
    setEmail(e);
  };

  const handlePassword = (e) => {
    setPass(e);
  };

  const handleForm = (e) => {
    e.preventDefault();

    setProcessing(true);

    axios
      .post("http://localhost:4000/api/user/add", {
        user_email: email,
        user_username: name,
        user_password: pass,
        user_type: "admin",
        user_isLoggedIn: true,
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.log("awefawef" + err);
      });

    setName("");
    setEmail("");
    setPass("");
    setPass("");
  };

  return (
    <div className="compo-register container">
      <div className="form">
        {!isSuccess && processing ? <span>Loading...</span> : <span></span>}
        {isSuccess ? <span>Register Success!</span> : <span></span>}
        <form onSubmit={(e) => handleForm(e)}>
          <h1>Register</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => handleUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => handlePassword(e.target.value)}
          />
          <input className="btn btn-primary" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
  return <div>RegisterPage</div>;
}

export default RegisterPage;
