export interface User {
  id: string;
  partitionKey: string;
  login: string;
  name: string;
  email: string;
  role: "client";
  phone: string;
  address: string;
  city: string;
  token: string;
  avatar: string;
}
