// const diye just variable without value declare kora jabena, eijonno let use hoy
/*
1. variable that is not initialized will give undefined
2. Function with no return will give undefined
3. Parameter that is not passed will be undefined
4. if return nothing on the right side will undefined
5. Property that does not exists on an object will give undefined
6. accessing array elements outside of the idex range give undefined
7. deleting an element inside an array give undefined
8. set a value directly to undefined
*/

let first;
// console.log(first);
function second(a, b) {
    const total = a + b;
}

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
console.log(noNegative(2, -1));

const array = [3, 5, 6, 7, 8];
// this is not a ideal method
delete array[1];
console.log(array);
// data na thakle null diye define kora hoy
const a = null;
const data = { result: [], updated: null };
console.log(typeof data.updated);