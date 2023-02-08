import React from "react";

export const LogoutButton = (props) => {
    return(
        <button onClick={() => sessionStorage.clear()}>Logout</button>
    )
}

export default LogoutButton