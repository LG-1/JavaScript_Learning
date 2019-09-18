function readNumber() {
    let num;
    do {
        num = prompt("please input a number", 0)
    } while (!isFinite(num));
    
    if (num === null || num === '') return null
    return +num
    
}

alert(`get a number: ${readNumber()}`)