export interface IAppRoute {
    parent: string;
    full: string;
    relative?: string;
    Full(): string;
}

export class AppRoute implements IAppRoute {
    parent: string;
    full: string;
    relative?: string;
    constructor(parent: string, full: string, relative?: string ){
        this.parent = parent;
        this.full = full ;
        this.relative = relative;
    }
    Full():string {
        return this.full ?? "";
    }
}

interface AllRoutes {
    Root: IAppRoute,
    Login : IAppRoute,
    Register : IAppRoute,
    Verify_Accounts: IAppRoute,
    Forgot_Password : IAppRoute,
    Enterprise : IAppRoute,
    Community : AppRoute,
    Features : AppRoute,
    Compareus : AppRoute,
    Documentation : AppRoute,
    Dashboard : IAppRoute,
    Billing : IAppRoute,
    Invoices : IAppRoute,
    Settings : IAppRoute,
    Support : IAppRoute,
    Notifications : IAppRoute,
    A_Login : IAppRoute,
    A_Forgot_Password : IAppRoute,
    A_Home : IAppRoute,
    A_Customers: IAppRoute,
    A_Licenses : IAppRoute,
    A_Audit : IAppRoute,
    A_Users : IAppRoute,
    A_Permission : IAppRoute,
    A_Notifications : IAppRoute
}

const AppRoutes:AllRoutes = {
    Root: new AppRoute('/','/','landing'),
    Login: new AppRoute('/','/auth/login','Login'),
    Register : new AppRoute('/auth/login','/auth/register','Register'),
    Verify_Accounts: new AppRoute('/auth/login', '/auth/verify_accounts', 'Verify Account'),
    Forgot_Password : new AppRoute('/auth/login', '/auth/forgot-password', 'Forgot Password'),
    Enterprise : new AppRoute('/', '/landing/enterprise', 'Enterprise'),
    Community : new AppRoute('/','/landing/community', 'Community'),
    Features : new AppRoute('/', '/landing/features', 'Features'),
    Compareus : new AppRoute('/', '/landing/compareus', 'Compare Us'),
    Documentation : new AppRoute('/', '/documentation', 'Documentation'),
    Dashboard : new AppRoute('/auth/login',`/dashboard/instances`,'Instance'),
    Billing : new AppRoute(`/dashboard/instances`, `/dashboard/billing`,'Billing'),
    Invoices : new AppRoute(`/dashboard/instances`, `/dashboard/invoices`, 'Invoices'),
    Settings : new AppRoute(`/dashboard/instances`, `/dashboard/settings`, 'Settings'),
    Support : new AppRoute(`/dashboard/instances`, `/dashboard/support`, 'Support'),
    Notifications : new AppRoute(`/dashboard/instances`, `/dashboard/notifications`, 'Notifications'),
    A_Login : new AppRoute(`/admin/login`,`/admin/login`, 'Admin Login'),
    A_Forgot_Password : new AppRoute(`/admin/login`,`/admin/forgot-password`,'Admin Reset Password'),
    A_Home : new AppRoute(`/admin/login`,`/admin/dashboard/home`,'Admin Home'),
    A_Customers : new AppRoute(`/admin/login`,`/admin/dashboard/customer`,'Manage Customers'),
    A_Licenses : new AppRoute(`/admin/login`,`/admin/dashboard/licenses`,'Admin Licenses'),
    A_Audit : new AppRoute(`/admin/login`,`/admin/dashboard/audit`,'Admin Audit'),
    A_Users : new AppRoute(`/admin/login`, `/admin/dashboard/users`, 'Manage Users'),
    A_Permission : new AppRoute(`/admin/login`, `/admin/dashboard/permissions`, 'Manage Permissions'),
    A_Notifications : new AppRoute(`/admin/login`, `/admin/dashboard/notifications`, 'Admin Notifications')
}

export {AppRoutes};