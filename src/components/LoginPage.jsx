import React from "react";

function LoginPage() {
  return (
    <div className="compo-login container">
      <div className="form">
        <form action="">
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
  return <div>LoginPage</div>;
}
export default LoginPage;
