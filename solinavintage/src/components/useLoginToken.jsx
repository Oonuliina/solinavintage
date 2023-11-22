import {useState} from 'react';

export default function useLoginToken() {
    function getLoginToken(){
        const loginTokenString = sessionStorage.getItem('loginToken');
        const userToken = JSON.parse(loginTokenString);
        return userToken?.loginToken
    };
    const [loginToken, setLoginToken] = useState(getLoginToken());

    const saveLoginToken = userToken => {
        sessionStorage.setItem('loginToken', JSON.stringify(userToken));
        setLoginToken(userToken.loginToken);
    };
    
    return {
        setLoginToken: saveLoginToken,
        loginToken
    }
};