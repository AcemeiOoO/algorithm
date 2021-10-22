
// 生成一个0-29的随机数
let arr = []
let sum = 30;
function find() {
    let n
    while (arr.indexOf(n = Math.floor(Math.random() * sum * 10 % sum)) != -1) {
    }
    arr.push(n)
    // 播放第n首
    return n
}
for (let i = 0; i < sum; i++) {
    console.log(find(i));
}
console.log(arr);