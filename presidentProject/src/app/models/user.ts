import { iProduct } from "./product"

export interface iUser {
  id:number,
  firstName:string,
  lastName: string,
  address: string,
  phone: number,
  email:string
  password?:string
  admin: boolean
  cart: iProduct[]
}
