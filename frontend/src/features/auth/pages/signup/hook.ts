import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import React, { useEffect } from "react";
import { storeSignupData } from "@src/features/auth/slices";
import { usePostSignupMutation } from "@src/features/auth/services";
import { useNavigate } from "react-router-dom";

const SignupHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const signupData = useAppSelector(
    (state: RootState) => state.storeInput.signupData
  );
  const [postSignup, { data: response }] = usePostSignupMutation();
  //   const signupDataBlock = useAppSelector((state:RootState)=> state.storeInput.signupData);

  const getSignupData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    dispatch(storeSignupData({ ...signupData, [name]: value }));
  };

  const postSignupData = () => {
    return postSignup(signupData);
  };
  useEffect(() => {
    try {
      if (response && response.process === true) {
        return navigate("/login");
      }
      return navigate("/signup");
    } catch (err) {
      console.log(err);
    }
  }, [response, navigate]);

  return {
    functions: {
      getSignupData,
      postSignupData,
    },
  };
};

export default SignupHook;
