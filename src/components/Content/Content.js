import React from "react";
import { MyContext } from "../../App";

function Content() {
  const handleLogoutButton = (data) => (e) => {
    e.preventDefault();
    data.setUser(null);
    data.setLogged(false);
  };
  return (
    <div>
      <MyContext.Consumer>
        {(value) =>
          value.isLogged && (
            <div>
              <h2>Logged in as {value.userName}!</h2>
              <button onClick={handleLogoutButton(value)}>LOGOUT</button>
            </div>
          )
        }
      </MyContext.Consumer>
    </div>
  );
}

export default Content;
