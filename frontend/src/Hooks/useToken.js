import { useState } from 'react';

export default function useToken() {

    // get auth token from local storage
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log(userToken)
        return userToken
    }

    // Initialize token state with getToken()
    const [token, setToken] = useState(getToken());


    // Save token to local storage
    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
      };

    // Return setToken and token to be used on other pages :)
    return {
        setToken: saveToken,
        token
    }

}