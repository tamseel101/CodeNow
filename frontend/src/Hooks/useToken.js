import { useState } from 'react';

export default function useToken() {

    // get auth token from local storage
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log(userToken)
        return userToken
    }

    // const getUsername = () => {
    //     const tokenString = sessionStorage.getItem('username');
    //     const userToken = JSON.parse(tokenString);
    //     console.log(userToken)
    //     return userToken
    // }

    // Initialize token state with getToken()
    const [token, setToken] = useState(getToken());
    //const [username, setUsername] = useState(getUsername())



    // Save token to local storage
    const saveToken = (userToken, user_id, username) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        sessionStorage.setItem('user_id', JSON.stringify(user_id));
        sessionStorage.setItem('username', JSON.stringify(username));
        setToken(userToken);
      };

    // Return setToken and token to be used on other pages :)
    return {
        setToken: saveToken,
        token
    }

}