export interface ResponseAddressRequestIF {
  status: number;
  process: string;
  message: string;
}
export interface AddressIF {
  id: string;
  country: string;
  city: string;
  district: string;
  street: string;
  buildingNumber: string;
  neighborhood: string;
  postalCode: string;
  addressType: string;
  openAddress: string;
  isSelected: number;
}

export interface MapAddressIF {
  municipality: string;
  localName: string;
  freeformAddress: string;
  id: string;
  country: string;
  city: string;
  district: string;
  street: string;
  buildingNumber: string;
  neighborhood: string;
  postalCode: string;
  addressType: string;
  openAddress: string;
}
