import { Errors, UserTypes } from "src/_constants";

const savePermissionValidation = async(data: UserTypes ) =>{
    if ( data.firstname.trim().length === 0 ){
        return {
            type : 'firstname' , message: Errors.EmptyError
        }
    } else if (data.lastname.trim().length === 0) {
        return {
            type : 'lastname' , message : Errors.EmptyError
        }
    } else if (data.email.trim().length === 0 ){
        return {
            type : 'city' , message : Errors.EmptyError
        }
    } else if ( data.email.trim().length === 0 ){
        return {
            type : 'state' , message : Errors.EmptyError
        }
    }
    return {
        type : 'success' , message: 'validate successfully'
    }
}

export { savePermissionValidation };