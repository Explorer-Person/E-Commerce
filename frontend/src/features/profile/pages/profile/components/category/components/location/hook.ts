import { setProcess } from "@src/features/profile/slices";
import {
  deleteAddressesUI,
  storeAddress,
  storeAddresses,
  useDeleteAddressMutation,
  useDeleteAddressesMutation,
  useGetAddressMutation,
  useGetAllAddressesMutation,
} from "@src/shared";
import { useAppDispatch, useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import { deleteAddressUI } from "@src/shared";
import React from "react";
import { useSelectAddressMutation } from "@src/features/profile/services";

const LocationHook = () => {
  const dispatch = useAppDispatch();
  const [selectAddress] = useSelectAddressMutation();
  const [getAddresses] = useGetAllAddressesMutation();
  const [getAddress] = useGetAddressMutation();
  const [deleteAddresses] = useDeleteAddressesMutation();
  const [deleteAddress] = useDeleteAddressMutation();
  const addressData = useAppSelector(
    (state: RootState) => state.address.address
  );
  const addresses = useAppSelector(
    (state: RootState) => state.address.addresses
  );

  const fetchAddresses = async () => {
    try {
      await getAddresses().then((result) => {
        if ("data" in result) {
          const addresses = JSON.parse(result.data.message);
          dispatch(storeAddresses(addresses));
        }
      }); // Fetch addresses data
    } catch (error) {
      console.error("Error fetching addresses data:", error);
    }
  };
  const handleSelectAddress = (event: React.MouseEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    return selectAddress(value).then((result) => {
      if ("data" in result) {
        const updatedAddresses = addresses.map((address) => {
          if (String(address.id) === String(value)) {
            return {
              ...address,
              isSelected: 1,
            };
          }
          return {
            ...address,
            isSelected: 0,
          };
        });
        console.log(updatedAddresses);
        dispatch(storeAddresses(updatedAddresses));
      }
    });
  };

  const handleClickButtons = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { name, value } = event.target as HTMLButtonElement;
    let process;
    if (name === "delete") {
      process = deleteAddress(value);
    } else if (name === "deleteAll") {
      process = deleteAddresses();
    } else if (name === "add") {
      dispatch(setProcess("add"));
    } else if (name === "put") {
      process = getAddress(value);
      dispatch(setProcess("put"));
    } else if (name === "back") {
      dispatch(setProcess("get"));
    } else if (name === "getOne") {
      dispatch(setProcess("getOne"));
    } else if (name === "seeOthers") {
      dispatch(setProcess("get"));
    }

    if (process) {
      await process
        .then((result) => {
          if ("data" in result) {
            if (result.data.process === "get") {
              const message = JSON.parse(result.data.message);
              console.log(message);
              dispatch(storeAddress(message));
            } else if (result.data.process === "delete") {
              dispatch(deleteAddressUI(result.data.message));
            } else if (result.data.process === "deleteAll") {
              dispatch(deleteAddressesUI());
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return {
    functions: {
      handleClickButtons,
      fetchAddresses,
      handleSelectAddress,
    },
    datas: {
      addressData: addressData,
    },
  };
};
export default LocationHook;
