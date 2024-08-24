export interface ResponseGetUserIF {
  status: number,
  process: boolean,
  userData: {
    username: string;
    email: string;
    phone: string;
    role: string;
  }
  
}
