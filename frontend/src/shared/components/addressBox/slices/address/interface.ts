import { AddressIF } from "@src/shared/interfaces";

export interface  AddressStateIF {
  addressesLength: number;
  addresses: AddressIF[];
  address: AddressIF
}