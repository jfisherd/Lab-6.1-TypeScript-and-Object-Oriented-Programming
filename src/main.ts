import PhysicalProduct from './models/PhysicalProduct';
import DigitalProduct from './models/DigitalProduct';

console.log("importing complete")

let inventory: (PhysicalProduct | DigitalProduct)[] = []

inventory[0] = new PhysicalProduct('12345', 'sugar', 10, 4)
inventory[1] = new PhysicalProduct('67890', 'bread', 2, 1)
inventory[2] = new DigitalProduct('11111', 'album', 20, 500)
inventory[3] = new DigitalProduct('22222', 'movie', 10, 3000)


console.log(inventory)

// for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].weight) {
//         console.log(`Physical Product: ${inventory[i].name}, Price: ${inventory[i].getPriceWithTax()}, Weight: ${inventory[i].weight}, SKU: ${inventory[i].sku}`)
//     } else {
//         console.log(`Digital Product: ${inventory[i].name}, Price: ${inventory[i].}, File Size: ${inventory[i].}, SKU: ${inventory[i].sku}`)
//     }
// }