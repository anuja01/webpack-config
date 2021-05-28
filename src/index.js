import { wizard } from "./wizard"; // in order to use import we need webpack(bundle all), otherwise throw error
import { barbarian } from "./barbarian";

console.log('ran from index.js');
console.log(wizard);
console.log(barbarian);

const obj = {a: 'alpha', b: 'beta'};
const newObj = {...obj, c: 'charlie'}; // babel transpile will happen here. if you check the bundle, code will be transpiled to ad backward compability.
console.log(newObj) 