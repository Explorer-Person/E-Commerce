import { deleteAddressApi } from "./delete";
import { getAddressApi } from "./get";
import { postAddressApi } from "./post";
import { putAddressApi } from "./put";



const AddressMiddlewares = [getAddressApi.middleware, postAddressApi.middleware, deleteAddressApi.middleware, putAddressApi.middleware];

export default AddressMiddlewares;