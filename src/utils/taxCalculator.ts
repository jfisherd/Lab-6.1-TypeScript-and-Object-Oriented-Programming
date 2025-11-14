import { Product } from '../models/Product'

export default function calculateTax(product: Product): number {  // export function functionName(localVariable: object): number { ... localVariable ... return ...}
        return product.price * 1.1 
    }