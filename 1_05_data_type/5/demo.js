function truncate(str_, max_len) {
    if (str_.length < max_len){
        return str_
    }
    else{
        return str_.slice(0, max_len - 1) + '…'
    }
}

console.log(truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…")
console.log(truncate("Hi everyone!", 20) == "Hi everyone!")