import React from 'react'
import { useHistory } from "react-router-dom";

import { useDataContext, useDefaultUserContext } from '../../components/ContextHandler/ContextHandler';

export default function Home() {
    const dataContext = useDataContext();
    const defaultUser = useDefaultUserContext();
    const history = useHistory();
    const handleLoginButton = () => {
        history.push('/pass-form');
    }
    return (
        <div>
            <p>Welcome {(dataContext.userName === '')?(`${defaultUser.name} ${defaultUser.surname}`):(`back ${dataContext.userName}`)} to application please login:</p>
            <button onClick={handleLoginButton}>LOGIN</button>
        </div>
    )
}
