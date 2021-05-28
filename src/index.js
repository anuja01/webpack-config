import { wizard } from "./wizard"; // in order to use import we need webpack(bundle all), otherwise throw error
import { barbarian } from "./barbarian";

console.log('ran from index.js');
console.log(wizard);
console.log(barbarian);