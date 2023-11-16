import { cookieTypes } from "src/_constants";


const setCookie = (data:cookieTypes) => {
    const now = new Date();
    now.setTime(now.getTime() + data.expires * 24 * 60 * 60 * 1000);
    document.cookie = `${data.name}=${data.value};expires=${now.toUTCString()};path=${data.path}`;
}

const deleteCookie = (name:string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
}

const getCookie = (name:string) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        if (cookie[0].indexOf(name) >= 0) {
            return decodeURIComponent(cookie[1]);
        }
    }
}

export {
    setCookie,
    deleteCookie,
    getCookie
};