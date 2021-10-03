import React from 'react'
// import withUser from '../../components/HOC/withUser';
import { useHistory } from "react-router-dom";
import { useDataContext } from '../../components/ContextHandler/ContextHandler';

function Movies() {
    const dataContext = useDataContext();

    const history = useHistory();
    const handleGoBackButton = () => {
        history.push('/content');
    }
    return (
        <div>
            <p>Movies for {dataContext.userName}</p>
            <button onClick={handleGoBackButton}>GO BACK</button>
        </div>
        // <div>
        //     {!props.loggedUser && <p>{props.defaultUser.name}</p>}
        //     {props.loggedUser && (
        //         <p>Movies for {props.loggedUser.userName}</p>
        //     )}
        //     <button onClick={handleGoBackButton}>GO BACK</button>
        // </div>
    )
}
export default Movies;
// export default withUser(Movies);