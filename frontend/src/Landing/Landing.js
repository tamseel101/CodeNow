import React from "react";
import LogoutButton from "../Components/logoutButton";

export const Landing = (props) => {
    return(
        <div>
            Hello World
            <LogoutButton setToken={ props.setToken }/>
        </div>
    )
}

export default Landing;