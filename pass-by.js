let a = 5;
let b = 9;
function add(num1, num2) {
    num1 = 8;
    return num1 * num2;
}
console.log(a)
console.log(add(a, b))

let student1 = { name: 'Shakib', partner: 'Mariam' };
let student2 = { name: 'Sizan', partner: 'Sara' };

function biye(spouse1, spouse2) {
    spouse1.name = 'Mariam';
    spouse1.partner = 'Shakib';
}
// non primitive tai reference change korbe kintu opore number pass korbe na 
console.log(student1);
biye(student1,student2)
console.log(student1);