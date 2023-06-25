export interface IProducts {
    objectId: string,
    brand: string,
    model: string,
    price: number,
    description: string,
    createdAt: string,
    updatedAt: string,
    image: string,
    year:string,
    size:string,
    category:string,
}

export type CartProduct = {
    objectId: string,
    image:string,
    brand: string,
    model: string,
    price: string | number,
}

export type OrderItem = {
    objectId: string,
    image:string,
    brand: string,
    model: string,
    price: string | number,
    createdAt:string
}
