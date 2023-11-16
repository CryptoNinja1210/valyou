import { Errors, LoginTypes, UserTypes, constant, userRole } from "src/_constants";
import { apiCore } from "../apiCore";
import { getCookie } from "../cookies";

const api = new apiCore();

const GetAllData = async() => {
    const role = window.sessionStorage.getItem('usertype');
    let token = getCookie(role === userRole.superadmin ? constant.SUPER_ADMIN_SESSION_KEY : constant.ADMIN_SESSION_KEY);
    const result = await api.get('admin/getall', token?token:null );
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const AdminLoginRequest = async(data:LoginTypes) => {
    const result = await api.post('admin/login', data, null);
    if ( !result ) {
        return {
            type: 'failed',
            message : Errors.ServerError
        }
    }
    if ( result.status === 'success' ) {
        let role = userRole.admin;
        if ( result.data.user.role === userRole.superadmin ) role = userRole.superadmin;
        api.formatAdminCookie();
        api.setLoggedInUser(result.data, role);
    }
    return result;
}

const savePermissionRequest = async(data:UserTypes) => {
    const role = window.sessionStorage.getItem('usertype');
    let token = getCookie(role=== userRole.superadmin ? constant.SUPER_ADMIN_SESSION_KEY : constant.ADMIN_SESSION_KEY);
    const result = await api.post('admin/dashboard/updatePermission',data, token?token:null);
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const updateInstanceByAdminRequest = async(data:any) => {
    const role = window.sessionStorage.getItem('usertype');
    let token = getCookie(role === userRole.superadmin ? constant.SUPER_ADMIN_SESSION_KEY : constant.ADMIN_SESSION_KEY);
    const result = await api.post('admin/dashboard/updateInstance', data, token?token:null);
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const deleteInstanceByAdminRequest = async (data:any) => {
    const role = window.sessionStorage.getItem('usertype');
    let token = getCookie(role === userRole.superadmin ? constant.SUPER_ADMIN_SESSION_KEY : constant.ADMIN_SESSION_KEY);
    const result = await api.post('admin/dashboard/deleteInstance', data, token?token:null);
    if ( !result ) {
        return {
            type: 'failed',
            message: Errors.ServerError
        }
    }
    return result;
}

const AdminLogoutRequest = async () => {
    const role = window.sessionStorage.getItem('usertype');
    api.setLoggedInUser(null, role?role:'');
}

export {
    GetAllData,
    AdminLoginRequest,
    savePermissionRequest,
    updateInstanceByAdminRequest,
    deleteInstanceByAdminRequest,
    AdminLogoutRequest
};