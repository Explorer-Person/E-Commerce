import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import React from "react";
import { setAuthStatus, storeLoginData } from "@src/features/auth/slices";
import { usePostLoginMutation } from "@src/features/auth/services";
import { useNavigate } from "react-router-dom";
// import { usePostloginMutation } from "@src/features/auth/services";

const LoginHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginData = useAppSelector(
    (state: RootState) => state.storeInput.loginData
  );
  const [postLogin] = usePostLoginMutation();

  const getLoginData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    dispatch(storeLoginData({ ...loginData, [name]: value }));
  };

  const postLoginData = () => {
    return postLogin(loginData)
    .then(result=>{
      console.log(result);
      try {
        if('data' in result){
          if (result && result.data.status === 200) {
            dispatch(setAuthStatus(true));
            return navigate("/");
          }
          return navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err=>console.log(err));
  };

  return {
    functions: {
      getLoginData,
      postLoginData,
    },
  };
};

export default LoginHook;
