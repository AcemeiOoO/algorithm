setTimeout(() => {
    console.log(1);
}, 0);
async function main1() {
    new Promise((resolve, reject) => {
        console.log(2);
        resolve();
    }).then(() => {
        console.log(3);
    })
    await main2();
    console.log(7);
}
async function main2() {
    console.log(8);
}
requestAnimationFrame(() => {
    console.log(9);
});
main1();
setTimeout(() => {
    console.log(10);
}, 0);

// 2 8 3 7 9 1 10
// 2 8 3 7 1 10 9