import { useGetUserQuery } from "@src/features/profile/services";
import { useEditUserMutation } from "@src/features/profile/services/put";
import {
  resetLoading,
  startLoading,
  storeEditedUserData,
  storeUserData,
} from "@src/features/profile/slices";
import { setBoxStatus } from "@src/shared";

import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import React, { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

const ProfileInfoHook = () => {
  const { showBoundary } = useErrorBoundary();
  const { userData, editedUserData } = useAppSelector(
    (state: RootState) => state.user
  );

  const dispatch = useAppDispatch();
  const { data } = useGetUserQuery();
  const [editUser] = useEditUserMutation();
  useEffect(() => {
    if (data) {
      dispatch(
        storeUserData({ ...data.userData, password: "", newPassword: "" })
      );
    }
  }, [data]);
  const setConfirmBoxStatus = (status: boolean) => {
    dispatch(setBoxStatus(status));
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(
      storeEditedUserData({
        ...editedUserData,
        [name]: value.trim(),
      })
    );
  };
  const handleClickButton = () => {
    editUser(editedUserData)
      .then((result) => {
        dispatch(startLoading());
        return result;
      })
      .then((result) => {
        setTimeout(() => {
          dispatch(resetLoading());
          setConfirmBoxStatus(false);
          if ("data" in result) {
            if(result.data.status === 500){

            }
            dispatch(
              storeUserData({
                ...result.data.userData,
                password: "",  
                newPassword: "",
              })
            );
          }
        }, 2000);   
      })
      .catch((err) => showBoundary(err));
  };

  return {
    functions: {
      handleInputChange,
      handleClickButton,
      setConfirmBoxStatus,
    },
    datas: {
      userData,
      editedUserData,
    },
  };
};
export default ProfileInfoHook;
