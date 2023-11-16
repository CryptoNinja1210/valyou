import { Errors, LoginTypes, PasscodeTypes, SignupTypes } from "src/_constants";
import { apiCore } from "../apiCore";

const api = new apiCore();

const LoginRequest = async(data : LoginTypes) => {
    const result = await api.post( 'login' , data, null );
    if ( result === undefined ) {
        return {
            type: 'failed',
            message : Errors.ServerError
        }
    }
    if ( result.status === 200) {
        api.setLoggedInUser(result.success, 'user');
    }
    return result;
}

const SignupRequest = async(data : SignupTypes ) => {
    const result = await api.post( 'register', data, null );
    if ( result === undefined ){
        return {
            type : 'failed',
            message : Errors.ServerError
        }
    }
    if ( result.status === 200 ){
        api.setLoggedInUser(result.success, 'user');
    }
    return result;
}

const VerifyRequest = async(data: PasscodeTypes) => {
    const result = await api.post('verify_accounts', data, null);
    if ( result === undefined ){
        return {
            type: 'failed',
            message : Errors.ServerError
        }
    }
    if ( result.status === 'success' ){
        api.setUserInSession(result.data.user, 'user');
    }
    return result;
}

const ResendVerifyCodeRequest = async(data: PasscodeTypes) => {
    const result = await api.post('resend_verifycode', data, null);
    if ( result === undefined ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}



const getSubscription_plan = async() => {
    const result = await api.post('subscription_plans',{},null);
    return result;
}

export {
    LoginRequest,
    SignupRequest,
    VerifyRequest,
    ResendVerifyCodeRequest,
    getSubscription_plan
};