// import {Product} from "/inventory-tracker/src/models/Products.ts";
import calculateTax from "../utils/taxCalculator";
import { Product } from "./Product"

export default class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return calculateTax(this)
    }

    get kgFormatted () {
        return this.weight + " kg" // SHOULD RETURN STRING?
    }
}