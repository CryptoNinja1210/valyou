export interface LoginTypes {
    email : string;
    password : string;
}

export interface SignupTypes {
    first_name : string;
    last_name : string;
    email : string;
    password : string;
    phone_number: string;
    country: string,
    avatar: string;
}

export interface PasscodeTypes {
    passcode?: string;
    email?: string;
}

export interface UpdateAccountTypes {
    firstname: string;
    lastname : string;
    email : string;
}

export interface DashboardTypes {
    subdomain: string;
    line1 : string;
    city : string;
    state : string;
    country : string;
    postal_code : string;
    paymentMethodId: string;
    subscription_plans_id: number;
}

export interface UserTypes {
    id:number;
    firstname: string;
    lastname: string;
    email: string;
    email_verified_at?: string;
    password: string;
    avatar?: any;
    created_at? : string;
    passcode?: string;
    pm_last_four?:any;
    pm_type?:any;
    role:string;
    stripe_id?:string;
    trial_ends_at?:string;
    updated_at?:string;
}

export interface PanelUserTypes {
    firstname : string;
    lastname : string;
    email: string;
    password: string;
    subdomain: string;
}

export interface SessionTypes {
    token : string;
    user: object;
    subscription_plan?: any;
    instances?: any;
}

export interface cookieTypes {
    name : string;
    value:string;
    expires: number ;
    path: string | RegExp ;
}

export interface NotificationTypes {
    avatar: string;
    title : string;
    subtitle : string;
}

export const serviceTypes = {
    'community' : {
        type : 1,
        name : 'panel.gg'
    },
    'enterprise' : {
        type : 2,
        name : 'Custom Domain'
    }
}

export const instanceTypes = ['Free','Community','Enterprise'];

export const MethodType = {
    'GET' : 'GET',
    'POST' : 'POST',
    'PUT' : 'PUT'
}

export const constant = {
    'AUTH_SESSION_KEY' : 'hyper_user',
    'ADMIN_SESSION_KEY' : 'admin_user',
    'SUPER_ADMIN_SESSION_KEY' : 'super_user',
    'USER_KEY' : 'currentUser',
    'TOKEN_PREFIX' : 'Bearer ',
    'SIGN_UP' : 'SIGN UP',
    'LOGIN' : 'LOG IN',
    'SAMPLE_AVATAR_URL' : '/images/profile/user-1.jpg'
}

export const userRole = {
    'user' : 'user',
    'operator' : 'operator',
    'admin' : 'admin',
    'superadmin' : 'superadmin'
}

export const responseTypes = {
    failed : "failed",
    success : 'success',
    error : "error"
}

export const countryList = [
    { code: "US", name: "United States" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AL", name: "Albania" },
    { code: "AM", name: "Armenia" },
    { code: "AR", name: "Argentina" },
    { code: "AT", name: "Austria" },
    { code: "AU", name: "Australia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BE", name: "Belgium" },
    { code: "BG", name: "Bulgaria" },
    { code: "BH", name: "Bahrain" },
    { code: "BO", name: "Bolivia" },
    { code: "CA", name: "Canada" },
    { code: "CH", name: "Switzerland" },
    { code: "CI", name: "Côte d'Ivoire" },
    { code: "CL", name: "Chile" },
    { code: "CO", name: "Colombia" },
    { code: "CR", name: "Costa Rica" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DE", name: "Germany" },
    { code: "DK", name: "Denmark" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "EE", name: "Estonia" },
    { code: "EG", name: "Egypt" },
    { code: "ES", name: "Spain" },
    { code: "ET", name: "Ethiopia" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GB", name: "United Kingdom" },
    { code: "GH", name: "Ghana" },
    { code: "GM", name: "Gambia" },
    { code: "GR", name: "Greece" },
    { code: "GT", name: "Guatemala" },
    { code: "GY", name: "Guyana" },
    { code: "HK", name: "Hong Kong" },
    { code: "HR", name: "Croatia" },
    { code: "HU", name: "Hungary" },
    { code: "ID", name: "Indonesia" },
    { code: "IE", name: "Ireland" },
    { code: "IL", name: "Israel" },
    { code: "IS", name: "Iceland" },
    { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" },
    { code: "JO", name: "Jordan" },
    { code: "JP", name: "Japan" },
    { code: "KE", name: "Kenya" },
    { code: "KH", name: "Cambodia" },
    { code: "KR", name: "South Korea" },
    { code: "KW", name: "Kuwait" },
    { code: "LC", name: "Saint Lucia" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LK", name: "Sri Lanka" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "LV", name: "Latvia" },
    { code: "MA", name: "Morocco" },
    { code: "MD", name: "Moldova" },
    { code: "MG", name: "Madagascar" },
    { code: "MK", name: "North Macedonia" },
    { code: "MN", name: "Mongolia" },
    { code: "MO", name: "Macau" },
    { code: "MT", name: "Malta" },
    { code: "MU", name: "Mauritius" },
    { code: "MX", name: "Mexico" },
    { code: "MY", name: "Malaysia" },
    { code: "NA", name: "Namibia" },
    { code: "NG", name: "Nigeria" },
    { code: "NL", name: "Netherlands" },
    { code: "NO", name: "Norway" },
    { code: "NZ", name: "New Zealand" },
    { code: "OM", name: "Oman" },
    { code: "PA", name: "Panama" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PY", name: "Paraguay" },
    { code: "QA", name: "Qatar" },
    { code: "RO", name: "Romania" },
    { code: "RS", name: "Serbia" },
    { code: "RW", name: "Rwanda" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SE", name: "Sweden" },
    { code: "SG", name: "Singapore" },
    { code: "SI", name: "Slovenia" },
    { code: "SK", name: "Slovakia" },
    { code: "SN", name: "Senegal" },
    { code: "SV", name: "El Salvador" },
    { code: "TH", name: "Thailand" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TZ", name: "Tanzania" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VN", name: "Vietnam" },
    { code: "ZA", name: "South Africa" },
    { code: "BD", name: "Bangladesh" },
    { code: "BJ", name: "Benin" },
    { code: "MC", name: "Monaco" },
    { code: "NE", name: "Niger" },
    { code: "SM", name: "San Marino" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BN", name: "Brunei" },
    { code: "BT", name: "Bhutan" },
    { code: "AO", name: "Angola" },
    { code: "DZ", name: "Algeria" },
    { code: "TW", name: "Taiwan" },
    { code: "BS", name: "Bahamas" },
    { code: "BW", name: "Botswana" },
    { code: "GA", name: "Gabon" },
    { code: "LA", name: "Laos" },
    { code: "MZ", name: "Mozambique" }
];