"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayDetails = function () {
        return "product name: ".concat(this.name, ", price: $").concat(this.price, ", sku: ").concat(this.sku);
    };
    Product.prototype.getPriceWithTax = function () {
        return this.price;
    };
    return Product;
}());
exports.Product = Product;
