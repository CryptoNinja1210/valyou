import { PasscodeTypes, Errors, LoginTypes, SignupTypes } from "src/_constants";


const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const LoginValidation = async (data:LoginTypes) => {
    if ( data.email === '' ){
        return {
            type : 'email', message : Errors.EmptyError    
        }
    } else if ( ! isValidEmail(data.email) ) {
        return {
            type : 'email', message : Errors.EmailTypeError
        }
    } else if ( data.password === '' ){
        return {
            type : 'password', message : Errors.EmptyError
        }
    }
    return {
        type : 'success', message : 'validate successfully'
    }
}

const SignupValidation = async(data:SignupTypes) => {
    if ( data.first_name.trim().length === 0 ){
        return {
            type : 'firstname', message : Errors.EmptyError
        }
    } else if (data.last_name.trim().length === 0) {
        return {
            type : 'lastname', message : Errors.EmptyError
        }
    } else if (data.email.trim().length === 0 ){
        return {
            type : 'email', message : Errors.EmptyError
        }
    } else if ( ! isValidEmail(data.email) ){
        return {
            type : 'email', message : Errors.EmailTypeError
        }
    } else if ( data.password.trim().length === 0 ){
        return {
            type : 'password', message : Errors.EmptyError
        }
    }
    return {
        type : 'success', message : "validate successfully"
    }
}

const passcodeValidation = async(data:PasscodeTypes) => {
    if ( data.passcode?.trim().length === 0) {
        return {
            type : 'passcode', message : Errors.EmptyError
        }
    }
    if ( data.email?.trim().length === 0){
        return {
            type: 'email' , message: Errors.MustLogin
        }
    }
    return {
        type: 'success' , message: 'validate successfully'
    }
}


export {
    LoginValidation, 
    SignupValidation,
    isValidEmail, 
    passcodeValidation
};