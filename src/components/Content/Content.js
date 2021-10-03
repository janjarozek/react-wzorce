import React from "react";
import { useHistory } from "react-router-dom";

import { useDataContext, useUpdateNameContext, useUpdateLoggedStatusContext } from '../ContextHandler/ContextHandler';

export default function Content() {
  const dataContext = useDataContext();
  const updateNameContext = useUpdateNameContext();
  const updateLoggedStatusContext = useUpdateLoggedStatusContext();

  const history = useHistory();

  const handleLogoutButton = (e) => {
    e.preventDefault();
    updateNameContext('');
    updateLoggedStatusContext(false);
    history.push('/');
  };
  const handlePlacesButton = () => {
    history.push('/places');
  }
  const handleMoviesButton = () => {
    history.push('/movies');
  }
  return (
    <>
      {
      (dataContext.logged === true) && (
        <div>
          <h2>Logged in as {dataContext.userName}!</h2>
          <button onClick={handleMoviesButton}>Movies</button>
          <button onClick={handlePlacesButton}>Places</button>
          <button onClick={handleLogoutButton}>LOGOUT</button>
        </div>
      )
      }
    </>
  );
}
