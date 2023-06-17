export interface IUserProfile {
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt: string,
  updatedAt: string,
  objectId: string,
}

export interface IUserLogin {
  objectId:string,
  username:string,
  createdAt:string,
  updatedAt:string,
  sessionToken:string,
}