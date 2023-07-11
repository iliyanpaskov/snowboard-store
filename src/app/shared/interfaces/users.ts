export interface IUserOrders {
  objectId: string,
  image: string,
  brand: string,
  model: string,
  price: string | number,
}

export interface IUserProfile {
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt?: string,
  updatedAt?: string,
  objectId: string,
  fullName: string,
  sessionToken: string,
  orders?: IUserOrders[]
}

export interface IUserLogin {
  objectId: string,
  username: string,
  email: string,
  phone: string,
  address: string,
  createdAt?: string,
  updatedAt?: string,
  fullName: string,
  ACL?: object,
  sessionToken: string,
  orders?: IUserOrders[]
}