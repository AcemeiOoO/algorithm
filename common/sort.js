// arr=[4,5,6,1,2,3]
arr=[98, 42, 25, 54, 15, 3, 25, 72, 41, 10, 121]


// 冒泡排序
function bubbleSort(arr) {
    for(let i = 0; i < arr.length-1; i++){
        for(let j = 0; j < arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr
};
// console.log(bubbleSort(arr));


// 插入排序
function insertSort(arr){
    let len = arr.length
    let preI
    let current
    for (let i = 1; i < len; i++) {
        preI = i - 1
        current = arr[i]
        while(preI >= 0 && arr[preI] > current){
            arr[preI+1] = arr[preI]
            preI--
        }
        arr[preI+1] = current
    }
    return arr
}
// console.log(insertSort(arr));


// 快速排序1
function quickSort(arr,l,r){
    if(arr.length<=1) return 
    if(l>=r) return 
    let p = arr[l] 
    let i = l 
    let j = r 
    while(i!=j){

        // 一定要先从右边开始找，这样停止循环时i肯定是小于等于p的
        while(arr[j]>=p&&i<j){
            j-- 
        }

        while(arr[i]<=p&&i<j){
            i++ 
        }

        if(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
    arr[l] = arr[i] 
    arr[i] = p 
    quickSort(arr,l,i-1) 
    quickSort(arr,i+1,r) 
}
// console.log(quickSort(arr,0,arr.length-1))

// 快速排序2
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }

　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];

　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}

　　return quickSort(left).concat([pivot], quickSort(right));
}
// console.log(quickSort(arr));


// 堆排序
/*
    如果i=0，节点i是根节点，否则节点i的父节点为(i-1)/2
    2*i+1左子节点    2*i+2 右子节点
*/
function construct(arr, i, length){
    // 最小堆
    for (let i = Math.floor(length/2)-1; i >= 0; i--) {
        // i为完全二叉树或完全二叉树子树的根节点
        let r = i
        for (let j = 2*i+1; j < length; j = 2*j+1) {
            // j为左孩子节点
            if(j+1 < length && arr[j] > arr[j+1]){
                // 若有右孩子且右孩子更小，将j指向右孩子
                j = j+1
            }
            // 若孩子节点比根节点大，交换
            if(arr[j] < arr[r]){
                [arr[r], arr[j]] = [arr[j], arr[r]]
            }
            r = j
        }
    }

    //// 最大堆
    // for (let i = Math.floor(length/2)-1; i >= 0; i--) {
    //     // i为完全二叉树或完全二叉树子树的根节点
    //     let r = i
    //     for (let j = 2*i+1; j < length; j = 2*j+1) {
    //         // j为左孩子节点
    //         if(j+1 < length && arr[j] < arr[j+1]){
    //             // 若有右孩子且右孩子更大，将j指向右孩子
    //             j = j+1
    //         }
    //         // 若孩子节点比根节点大，交换
    //         if(arr[j] > arr[r]){
    //             [arr[r], arr[j]] = [arr[j], arr[r]]
    //         }
    //         r = j
    //     }
    // }
}
function addNode(arr,value){
    arr.push(value);
    construct(arr,0,arr.length);
}
function deleteNode(arr,value){
    let index = arr.indexOf(value)
    if(index == -1){
        return;
    }
    [arr[index], arr[arr.length-1]] = [arr[arr.length-1], arr[index]];
    arr.pop();
    construct(arr,0,arr.length);
}
function paixv(arr){
    for (let i = 0; i < arr.length-1; i++) {
        construct(arr,0,arr.length-i);
        [arr[0], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[0]];
    }
}
// construct(arr,0,arr.length);
paixv(arr)
console.log(arr);