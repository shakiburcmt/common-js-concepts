const first = 1;
const second = true;
if (first == second) {
    console.log('equal')
}
else {
    console.log('unequal')
}
// == dile type coercion hoy mane true ke 1 e convert kore fele tai 1 & true is same that's why use ===

// non primitive hole reference check korbe tokhon ==&=== same
const firstt = [];
const secondd = firstt;
if (firstt == secondd) {
    console.log('equal')
}
else {
    console.log('unequal')
}