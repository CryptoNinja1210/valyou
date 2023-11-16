import axios from "axios";
import jwtDecode from 'jwt-decode';
import { UpdateAccountTypes, constant, userRole, SessionTypes } from "src/_constants";
import { setCookie, deleteCookie } from "./cookies";

const AUTH_SESSION_KEY = constant.AUTH_SESSION_KEY;
const ADMIN_SESSION_KEY = constant.ADMIN_SESSION_KEY;
const SUPER_ADMIN_SESSION_KEY = constant.SUPER_ADMIN_SESSION_KEY;

// const baseURL="http://valyouxm2.sg-host.com/api"
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

interface DecodedToken {
    exp: number;
}

const broadcastUrl = baseURL+'/broadcasting/';
const broadcastAuthInstance = axios.create({
    baseURL: broadcastUrl,
    headers: {  
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

class apiCore {
    protected API_URL = baseURL;
    protected client = axios.create({
        baseURL: this.API_URL,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost',
            'Accept': 'application/json'
        }
    });
    getUserFromSession = (key:string):string|null => {
        if ( typeof window !== 'undefined' ){
            let session = window.sessionStorage.getItem(key);
            return session ? session : null;
        } else {
            return null;
        }
    }
    setAuthorization = (token: string | null ) => {
        if ( token ) this.client.defaults.headers.common['Authorization'] = constant.TOKEN_PREFIX + token;
        else delete this.client.defaults.headers.common['Authorization'];
    }
    isUserAuthenticated = (token: string|undefined) => {
        if ( !token ) return false;
        const decodedToken = jwtDecode<DecodedToken>(token);
        const expirationTime = decodedToken.exp * 1000;
        if ( expirationTime < Date.now() ) return false;
        return true;
    }

    post = async (url:string, data:any, authorization: string|null) => {
        this.setAuthorization(authorization);
        const request = new Promise<any>((resolve, reject) => {
            this.client.post(url, data).then(async res => {
                console.log('post_resolve', res.data, this.client)
                resolve(res.data);
            }).catch(err=>{
                console.log('post_catch', err.response)
                reject(err.response?.data);
            })
        })
        const result = await request.then(res => {return res;}).catch(err => {return err;});
        return result ;
    }

    get = async (url:string,authorization:string|null) => {
        this.setAuthorization(authorization);
        const request = new Promise<any>((resolve, reject) => {
            this.client.get(url).then(async res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.response?.data);
            })
        })
        const result = await request.then(res => {return res;}).catch(err => {return err;});
        return result;
    }

    put = async (url:string, data:UpdateAccountTypes, authorization:string|null) => {
        this.setAuthorization(authorization);
        const request = new Promise<any>((resolve, reject) => {
            this.client.put(url, data).then(async res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.response?.data);
            })
        });
        const result = await request.then(res => {return res;}).catch(err => {return err;});
        return result;
    }

    setLoggedInUser = async (session:SessionTypes|null, isadmin : string) => {
        if ( session ) {
            if ( typeof window !== 'undefined' ){
                window.sessionStorage.setItem(isadmin === userRole.superadmin ? SUPER_ADMIN_SESSION_KEY : (isadmin === userRole.user? AUTH_SESSION_KEY: ADMIN_SESSION_KEY), JSON.stringify(session));
                window.sessionStorage.setItem('usertype', isadmin);
                const cookieData = {
                    name : isadmin === userRole.superadmin ? SUPER_ADMIN_SESSION_KEY : (isadmin === userRole.user ? AUTH_SESSION_KEY : ADMIN_SESSION_KEY),
                    value : session.token,
                    expires : 1,
                    path : "/"
                }
                setCookie(cookieData);
            }
        } else {
            if ( typeof window !== 'undefined' ){
                window.sessionStorage.removeItem(isadmin === userRole.superadmin ? SUPER_ADMIN_SESSION_KEY : (isadmin === userRole.user ? AUTH_SESSION_KEY : ADMIN_SESSION_KEY));
                window.sessionStorage.removeItem('usertype');
                deleteCookie(isadmin === userRole.superadmin ? SUPER_ADMIN_SESSION_KEY : (isadmin === userRole.user ? AUTH_SESSION_KEY : ADMIN_SESSION_KEY));
            }
        }
    }
    getLoggedInUser = (key: string) => {
        return this.getUserFromSession(key);
    }
    formatAdminCookie = () => {
        deleteCookie(constant.ADMIN_SESSION_KEY);
        deleteCookie(constant.SUPER_ADMIN_SESSION_KEY);
    }

    setUserInSession = async (modifiedUser: any, isadmin : string) => {
        if ( typeof window !== 'undefined' ){
            let userInfo = window.sessionStorage.getItem(AUTH_SESSION_KEY);
            if (userInfo) {
                const { token, user, subscription_plan ,instances } = JSON.parse(userInfo);
                this.setLoggedInUser({ token,  subscription_plan, instances, user:modifiedUser }, isadmin );
            }
        }
    };
}

export {apiCore, broadcastAuthInstance};