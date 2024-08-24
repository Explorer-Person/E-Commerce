export interface inputDataStateIF{
    signupData: signupDataIF;
    loginData: loginDataIF;
    authStatus: boolean;
}

export interface loginDataIF {
    username: string,
    password: string,
}

export interface signupDataIF {
    username: string,
    email: string,
    phone: string,
    password: string,
    confirmPassword: string,
}