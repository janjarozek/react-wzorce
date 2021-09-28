import React from 'react'
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const handleLoginButton = () => {
        history.push('/pass-form');
    }
    return (
        <div>
            <p>Welcome to application please login:</p>
            {/* <Link to="/pass-form">LOGIN</Link> */}
            <button onClick={handleLoginButton}>LOGIN</button>
        </div>
    )
}
