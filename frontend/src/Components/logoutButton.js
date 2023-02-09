import React from "react";
import { useNavigate } from "react-router-dom";



export const LogoutButton = (props) => {


    const redirect = () => {
        props.setToken(null)
    }


    return(
        <button onClick={redirect}>Logout</button>
    )
}

export default LogoutButton