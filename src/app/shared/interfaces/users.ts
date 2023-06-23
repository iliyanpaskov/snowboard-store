export interface IUserProfile {
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  objectId: string,
  fullName: string,
  sessionToken: string,
  orders?:Object[]
}

export interface IUserLogin {
  objectId: string,
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  fullName: string,
  ACL: object,
  sessionToken: string,
  orders?:Object[]
}