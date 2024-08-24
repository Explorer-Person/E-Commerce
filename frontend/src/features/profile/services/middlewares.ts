
import { getUserApi } from "./get/user";
import { addToCartApi, selectAddressApi } from "./post";
import editUserApi from "./put/editUser/service";


const UserMiddlewares = [getUserApi.middleware, selectAddressApi.middleware, editUserApi.middleware, addToCartApi.middleware];

export default UserMiddlewares;