import { useState } from 'react';

export default function useLoginToken() {
    /* Function to get login token from session storage */
    function getLoginToken() {
        const loginTokenString = sessionStorage.getItem('loginToken');
        const userToken = JSON.parse(loginTokenString);
        return userToken?.loginToken
    };

    /* State variable for login token defaulted as previous function */
    const [loginToken, setLoginToken] = useState(getLoginToken());

    /* Function to keep login token */
    const saveLoginToken = userToken => {
        sessionStorage.setItem('loginToken', JSON.stringify(userToken));
        setLoginToken(userToken.loginToken);
    };

    /* Return setting login token to saved login token */
    return {
        setLoginToken: saveLoginToken,
        loginToken
    }
};