import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./PassphraseForm.scss";
import { MyContext } from "../../App";

function PassphraseForm(props) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (data) => (e) => {
    e.preventDefault();
    if (pass === data.appKey) {
      console.log("success");
      data.setLogged(true);
      data.setUser(name);
      history.push('/content');
    }
  };
  return (
    <MyContext.Consumer>
      {(value) =>
        !value.isLogged && (
          <div className="form-container">
            <form onSubmit={handleSubmit(value)}>
              <div>
                <label>Name:</label>
                <input onChange={handleNameChange} type="text" />
              </div>
              <div>
                <label>Password:</label>
                <input onChange={handlePassChange} type="password" />
              </div>
              <button>SUBMIT</button>
            </form>
          </div>
        )
      }
    </MyContext.Consumer>
  );
}

export default PassphraseForm;
