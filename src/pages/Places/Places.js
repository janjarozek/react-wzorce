import React from 'react';
// import withUser from '../../components/HOC/withUser';
import { useHistory } from "react-router-dom";
import { useDataContext } from '../../components/ContextHandler/ContextHandler';

function Places(props) {
    const dataContext = useDataContext();

    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/content');
    }
    return (
        <div>
            <p>Places for {dataContext.userName}</p>
            <button onClick={handleGoBackButton}>GO BACK</button>
        </div>
        // <div>
        //     {!props.loggedUser && <p>{props.defaultUser.name}</p>}
        //     {props.loggedUser && (
        //         <p>Places where user {props.loggedUser.userName}'s been.</p>
        //     )}
        //     <button onClick={handleGoBackButton}>GO BACK</button>
        // </div>
    )
}
export default Places;
// export default withUser(Places);
