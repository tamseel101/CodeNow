import React from "react";
import useToken from "../Hooks/useToken";
import { useNavigate } from "react-router-dom";



export const LogoutButton = () => {
    const navigate = useNavigate();

    const { setToken } = useToken()

    const redirect = () => {
        setToken("h")
        navigate("/")
    }


    return(
        <button onClick={redirect}>Logout</button>
    )
}

export default LogoutButton