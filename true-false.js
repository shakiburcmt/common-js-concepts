/* 
truthy:
1.true
2.any number is truthy except 0
3.any string is truthy except '' even ' ' is truthy
4.empty object is truthy
5.empty array is truthy

falsy:
1.false
2.0
3.'' empty string
4.undefined is falsy
5.null is falsy
*/
let a = {};
if (a) {
    console.log('truthy');
}
else {
    console.log('falsy')
}


// check falsy
const x = [];
if (!!x) {
    console.log('falsy')
}