let menu = {
    width: 200,
    higth: 400,
    title: "test",
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu)

function multiplyNumeric(obj) {
    for (let key in obj){
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2
        }
    }
}