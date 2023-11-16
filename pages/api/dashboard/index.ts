import { DashboardTypes, Errors, PanelUserTypes, UpdateAccountTypes, constant } from "src/_constants";
import { apiCore } from "../apiCore";
import { getCookie } from "../cookies";

const api = new apiCore();

const PanelRequest = async(data: DashboardTypes) => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.post('dashboard/create', data, token?token:null );
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const GetDashboardInstances = async () => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.get('dashboard/getall',token?token:null);
    if ( !result ) {
        return {
            type : 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const savePanelUserRequest = async (data:PanelUserTypes) => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.post('dashboard/create_panel_user',data,token?token:null);
    if ( !result ){
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const UpdateAccountRequest = async (data:UpdateAccountTypes) => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.post('dashboard/update',data,token?token:null);
    if ( !result ){
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const updateInstanceByCustomerRequest = async(data:any) => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.post('dashboard/updateInstance', data, token?token:null);
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const deleteInstanceByCustomerRequest = async(data:any) => {
    const token = getCookie(constant.AUTH_SESSION_KEY);
    const result = await api.post('dashboard/deleteInstance', data, token?token:null);
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const DashboardLogoutRequest = async() => {
    api.setLoggedInUser(null, 'user');
}

export {
    PanelRequest,
    GetDashboardInstances,
    savePanelUserRequest,
    UpdateAccountRequest,
    updateInstanceByCustomerRequest,
    deleteInstanceByCustomerRequest,
    DashboardLogoutRequest
};