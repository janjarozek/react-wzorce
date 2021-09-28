import React from 'react'
import withUser from '../../components/HOC/withUser';
import { useHistory } from "react-router-dom";

function Movies(props) {
    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/content');
    }
    return (
        <div>
            {!props.loggedUser && <p>{props.defaultUser.name}</p>}
            {props.loggedUser && (
                <p>Movies for {props.loggedUser.userName}</p>
            )}
            <button onClick={handleGoBackButton}>GO BACK</button>
        </div>
    )
}
export default withUser(Movies);