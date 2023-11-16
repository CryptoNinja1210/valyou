import { DashboardTypes, Errors, UpdateAccountTypes } from "src/_constants";
import * as Yup from "yup";
import { isValidEmail } from "./authValidation";

const DashboardSchema = Yup.object().shape({
    subdomain : Yup.string().required("Required"),
    line1 : Yup.string().required("Required"),
    city : Yup.string().required("Required"),
    state : Yup.string().required("Required"),
    country : Yup.string().required("Required"),
    postal_code : Yup.string().required("Required"),
    cardNumber: Yup.string()
    .matches(/^\d{4}-\d{4}-\d{4}-\d{4}$/, 'Invalid credit card number')
    .test('luhn-algorithm','Invalid credit card number', value => {
        let cardNumber = value?.replace(/\D/g, '');
        let sum = 0 ;
        let shouldDouble = false ;
        for ( let i = cardNumber?.length ?? 0 - 1; i >= 0 ; i -- ){
            let digit = parseInt(cardNumber?.charAt(i) ?? '0');
            if ( shouldDouble) {
                digit *= 2;
                if ( digit > 9 ) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return (sum % 10) === 0;
    })
    .required('Required'),
    mmYy: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date')
    .test('expiration-date', 'Expiration date must be in the future', value => {
        if (!value) {
            return false;
        }
        const [mm, yy] = value.split('/');
        const now = new Date();
        const expirationDate = new Date(`${yy}-${mm}-01`);
        return expirationDate > now;
    })
    .required('Required'),
    cvc: Yup.string()
    .matches(/^\d{3,4}$/, 'Invalid cvc code')
    .required('Required'),
    zipCode: Yup.string().matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Invalid postal code').required('Required')
});

const DashboardValidation = async(data: DashboardTypes ) =>{
    if ( data.subdomain.trim().length === 0 ){
        return {
            type : 'subdomain' , message: Errors.EmptyError
        }
    } else if (data.line1.trim().length === 0) {
        return {
            type : 'line1' , message : Errors.EmptyError
        }
    } else if (data.city.trim().length === 0 ){
        return {
            type : 'city' , message : Errors.EmptyError
        }
    } else if ( data.state.trim().length === 0 ){
        return {
            type : 'state' , message : Errors.EmptyError
        }
    } else if ( data.country.trim().length === 0) {
        return {
            type : 'country' , message : Errors.EmptyError
        }
    } else if (data.postal_code.trim().length === 0){
        return {
            type : 'postal_code' , message : Errors.EmptyError
        }
    } else if ( data.paymentMethodId.trim().length === 0 ) {
        return {
            type : 'paymentMethodId', message : Errors.IncorrectPaymentError
        }
    }
    return {
        type : 'success' , message: 'validate successfully'
    }
}

const setPanelUserValidation = async(data:any) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if ( data.firstname.trim().length === 0){
        return {
            type: 'firstname', message : Errors.EmptyError
        }
    } else if ( data.lastname.trim().length === 0){
        return {
            type: 'lastname', message: Errors.EmptyError
        }
    } else if ( data.email.trim().length === 0 ){
        return {
            type: 'email', message : Errors.EmptyError
        }
    } else if ( ! pattern.test(data.password) ){
        return {
            type: 'password', message : Errors.PasswordTypeError
        }
    }
    return {
        type: 'success', message : 'validate successfully'
    }
}

const UpdateAccountValidation = async(data:UpdateAccountTypes) => {
    if ( data.firstname.trim().length === 0) {
        return {
            type : 'firstname', message: Errors.EmptyError
        }
    } else if ( data.lastname.trim().length === 0){
        return {
            type: 'lastname', message: Errors.EmptyError
        }
    } else if ( data.email.trim().length === 0){
        return {
            type: 'email', message: Errors.EmptyError
        }
    } else if ( !isValidEmail(data.email) ){
        return {
            type: 'email', message: Errors.EmailTypeError
        }
    }
    return {
        type: 'success', message : 'validate successfully'
    }
}

export {
    DashboardSchema, 
    DashboardValidation,
    setPanelUserValidation,
    UpdateAccountValidation
};