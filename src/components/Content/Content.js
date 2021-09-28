import React from "react";
import { useHistory } from "react-router-dom";


import { MyContext } from "../../App";

function Content() {
  const history = useHistory();
  const handleLogoutButton = (data) => (e) => {
    e.preventDefault();
    data.setUser(null);
    data.setLogged(false);
    history.push('/');
  };
  const handlePlacesButton = () => {
    history.push('/places');
  }
  const handleMoviesButton = () => {
    history.push('/movies');
  }
  return (
    <div>
      <MyContext.Consumer>
        {(value) =>
          value.isLogged && (
            <div>
              <h2>Logged in as {value.userName}!</h2>
              <button onClick={handleMoviesButton}>Movies</button>
              <button onClick={handlePlacesButton}>Places</button>
              <button onClick={handleLogoutButton(value)}>LOGOUT</button>
            </div>
          )
        }
      </MyContext.Consumer>
    </div>
  );
}

export default Content;
