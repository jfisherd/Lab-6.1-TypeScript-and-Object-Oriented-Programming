import { PhysicalProduct } from './models/PhysicalProduct'
import { DigitalProduct } from './models/DigitalProduct'


let inventory: (PhysicalProduct | DigitalProduct)[]

let mySugar =  new PhysicalProduct('12345', 'sugar', 10, 4)



//     new PhysicalProduct('67890', 'bread', 2, 1),
//     new DigitalProduct('11111', 'album', 20, 500),
//     new DigitalProduct('22222', 'movie', 10, 3000)
// ]

// console.log(inventory)

// for (let i=0;i<inventory.length;i++) {
//     console.log(inventory[i].sku)
// }