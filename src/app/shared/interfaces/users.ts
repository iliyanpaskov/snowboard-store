export interface IUserProfile {
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  objectId: string,
  fullName:string,
}

// export interface IUserLogin {
//   objectId:string,
//   username:string,
//   createdAt:string,
//   updatedAt:string,
//   sessionToken:string,
// }

export interface IUserLogin {
  objectId: string,
    username: string,
    email: string,
    phone: string,
    address: string,
    createdAt: string,
    updatedAt: string,
    fullName:string,
    ACL: object,
    sessionToken: string,
}