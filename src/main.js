"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhysicalProduct_1 = require("./models/PhysicalProduct");
var DigitalProduct_1 = require("./models/DigitalProduct");
console.log("importing complete");
var inventory = [];
inventory[0] = new PhysicalProduct_1.default('12345', 'sugar', 10, 4);
inventory[1] = new PhysicalProduct_1.default('67890', 'bread', 2, 1);
inventory[2] = new DigitalProduct_1.default('11111', 'album', 20, 500);
inventory[3] = new DigitalProduct_1.default('22222', 'movie', 10, 3000);
console.log(inventory);
// ]
// console.log(inventory)
// for (let i=0;i<inventory.length;i++) {
//     console.log(inventory[i].sku)
// }
