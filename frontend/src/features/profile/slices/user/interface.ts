export interface UserStateIF {
    userData: UserDataIF;
    editedUserData: UserDataIF;
}

export interface UserDataIF{
    username: string,
    email: string,
    phone: string,
    role:  string,
    password: string,
    newPassword: string,
}