import {PhysicalProduct} from './models/PhysicalProduct'
import {DigitalProduct} from './models/DigitalProduct'


const sugar = new PhysicalProduct('12345', 'sugar', 10, 4)
const bread = new PhysicalProduct('67890', 'bread', 2, 1)

const album = new DigitalProduct('11111', 'album', 20, 500)
const movie = new DigitalProduct('22222', 'movie', 10, 3000)