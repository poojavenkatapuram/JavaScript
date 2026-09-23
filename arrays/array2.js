const heros = ["conrad", "garret", "dean"];
const heroines= ["Belly", "Hannah", "Allie"]

// heros.push(heroines);
// console.log(heros);

// const new_heros = heros.concat(heroines);
// console.log(new_heros)

const all_new_heros = [... heros, ...heroines];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]];
const real = another_array.flat(Infinity);
console.log(real);

console.log(Array.isArray("pooja"))
console.log(Array.from("pooja"));
console.log(Array.from({name:"pooja"}))