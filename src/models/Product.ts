export class Product { // EXPORT THIS
    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `product name: ${this.name}, price: $${this.price}, sku: ${this.sku}`
    }

    getPriceWithTax(): number {
        return this.price
    }
}