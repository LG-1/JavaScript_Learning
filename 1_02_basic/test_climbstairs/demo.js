
let N = 40

function func(n) {
    // 递归
    if (n < 3){
        return n
    }
    else{
        return func(n - 1) + func(n - 2)
    }
    
}

function func2(n) {
    // 动态规划
    if (n < 3) {
        return n
    }
    else {
        let pre2 = 1;
        let pre1 = 2;
        for (i = 3; i < n+1; i++){
            temp = pre1;
            pre1 = pre1 + pre2;
            pre2 = temp
        }
        return pre1
    }

}

let start_time = +new Date()
let res_rec = func(N)
let end_time = +new Date()
let res_dyn = func2(N)
let end_time2 = +new Date()

console.log('递归结果: ' + String(res_rec) + '; 耗时: ' + String(end_time - start_time) + 'ms')
console.log('动态规划: ' + String(res_dyn) + '; 耗时: ' + String(end_time2 - end_time) + 'ms')
console.log('性能差距: ' + String((end_time - start_time) / (end_time2 - end_time)))