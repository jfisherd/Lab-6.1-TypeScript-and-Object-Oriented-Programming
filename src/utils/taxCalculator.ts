import {Product} from '../models/Product'

 export function calculateTax(product: Product): number {  // export function functionName(localVariable: object): number { ... localVariable ... return ...}
        return product.price * 1.1 
    }