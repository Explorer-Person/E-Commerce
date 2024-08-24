import { signupApi } from "./signup";
import { loginApi } from "./login";


const AuthMiddlewares = [signupApi.middleware, loginApi.middleware];

export default AuthMiddlewares;