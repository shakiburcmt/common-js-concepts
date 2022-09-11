// functio er scope shudhu function er moddhei
// var use korle function er opore niye jay etake hoisting bole var scope mane na eijonno var use korbo na

for (var i = 0; i < 5; i++) {
    console.log(i)
}
// ekhane console log korar por o ashche karon var block mane na, ekhane let use korlei error dekhabe karon let block mene chole
console.log(i)

// function global scope jekono jaygay call kora jay tobe function expression hisabe kaj korena

a();
var a = function () {
    console.log('inside', 10);
}