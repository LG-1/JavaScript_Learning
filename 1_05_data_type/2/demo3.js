/**
 * 生成最小最大值之间的随机整数,每个整数的概率相等
 * @param {*} min 
 * @param {*} max 
 */
function randomItnrange(min, max) {
    let num = min + Math.random() * (max + 1 - min)
    return Math.floor(num)
}

let count = {}

for (let i=0; i< 2000000; i++){
    let num = randomItnrange(1,4)
    if (num in count){
        count[num] += 1
    }
    else{
        count[num] = 1
    }
}

console.log(count)