import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDataContext, useUpdateNameContext, useUpdateLoggedStatusContext } from '../ContextHandler/ContextHandler';

import "./PassphraseForm.scss";

function PassphraseForm() {
  const dataContext = useDataContext();
  const updateNameContext = useUpdateNameContext();
  const updateLoggedStatusContext = useUpdateLoggedStatusContext();
  const history = useHistory();

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(dataContext);
    if (pass === dataContext.appKey && name !== "") {
      console.log("success");
      updateLoggedStatusContext(true);
      updateNameContext(name);
      // data.setLogged(true);
      // data.setUser(name);
      history.push('/content');
    }
  };
  return (
    <div>
      {
        (dataContext.logged === false) &&
          (<div className="form-container">
            <form onSubmit={handleSubmit}>
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
    </div>
    // THIS IS BAD it's a class construction for passing context value ... for func useContext instead !
    // <MyContext.Consumer>
    //   {(value) =>
    //     !value.isLogged && (
    //       <div className="form-container">
    //         <form onSubmit={handleSubmit(value)}>
    //           <div>
    //             <label>Name:</label>
    //             <input onChange={handleNameChange} type="text" />
    //           </div>
    //           <div>
    //             <label>Password:</label>
    //             <input onChange={handlePassChange} type="password" />
    //           </div>
    //           <button>SUBMIT</button>
    //         </form>
    //       </div>
    //     )
    //   }
    // </MyContext.Consumer>
  );
}

export default PassphraseForm;
