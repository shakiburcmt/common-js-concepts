function sum(a, b, c) {
    // argument only function er moddhe call kora jay
    // console.log(arguments[2])
    // for of kora jabe but map find filter kora jabe na karon argument array like object
    // spread operator
    const args = [...arguments];
    console.log(args)
    const result = a + b + c;
    return result
}
// function call korar somoy jeta pathano hoye take arguments bole
console.log(sum(3, 5, 9))
// niche .length jeta pawa jabe seta holo koyta parameter ache
console.log(sum.length)