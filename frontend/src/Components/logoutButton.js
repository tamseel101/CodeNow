import React from "react";

export const LogoutButton = (props) => {

    const redirect = () => {
        props.setToken(null)
    }

    return(
        <button onClick={redirect}>Logout</button>
    )
}

export default LogoutButton