function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const participate = stopWatch();
console.log(participate())
console.log(participate())
console.log(participate())
console.log(participate())
