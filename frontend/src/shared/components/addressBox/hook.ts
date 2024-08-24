import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { resetLoading, setProcess, startLoading } from "@src/features";

import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import React from "react";
import { usePostAddressMutation, usePutAddressMutation } from "./services";
import { ResponseAddressRequestIF } from "@src/shared/interfaces";
import { RequestPutAddressIF } from "./services/put/address/interface";
import { setAddressesLength, storeAddress, updateAddressUI } from "./slices";

const AddressBoxHook = () => {
  const dispatch = useAppDispatch();
  const [postAddress] = usePostAddressMutation();
  const [putAddress] = usePutAddressMutation();
  const addressData = useAppSelector(
    (state: RootState) => state.address.address
  );
  const processStatus = useAppSelector(
    (state: RootState) => state.profileActions.processStatus
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.profileActions.isLoading
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = event.target as
      | HTMLInputElement
      | HTMLSelectElement;
    dispatch(
      storeAddress({
        ...addressData,
        [name]: value.trim(),
        id: addressData.id,
      })
    );
  };

  const handleSubmitAddress = async () => {
    let process;
    if (processStatus === "put") {
      const requestData: RequestPutAddressIF = {
        addressData: addressData,
        addressId: addressData.id,
      };
      console.log(addressData);
      process = putAddress(requestData);
    } else {
      process = postAddress(addressData);
    }
    if (process) {
      await process
        .then((response) => {
          dispatch(startLoading());
          return response;
        })
        .then(
          (
            response:
              | { data: ResponseAddressRequestIF }
              | { error: FetchBaseQueryError | SerializedError }
          ) => {
            if ("data" in response) {
              // Handle success case
              if (response.data.status === 201) {
                setTimeout(() => {
                  if (response.data.process === "put") {
                    const message = JSON.parse(response.data.message);
                    console.log(message);
                    dispatch(updateAddressUI(message));
                  }
                  if (response.data.process === "add") {
                    dispatch(setAddressesLength(Number(response.data.message)));
                  }
                  dispatch(setProcess("get"));
                  dispatch(resetLoading());
                }, 2000);
                
              }
            } else {
              // Handle error case
              console.error(response.error);
            }
          }
        )
        .catch((err) => console.log(err));
    }
  };
  return {
    functions: {
      handleInputChange,
      handleSubmitAddress,
    },
    datas: {
      addressData,
      isLoading,
    },
  };
};
export default AddressBoxHook;
