/*
    Object.keys()
*/
/*
    数组扁平化
    [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
    1. toString & split
        function flatten(arr) {
            return arr.toString().split(',').map(function(item) {
                return Number(item);
            })
        }
        
    2. join & split
        function flatten(arr) {
            return arr.join(',').split(',').map(function(item) {
                return parseInt(item);
            })
        }
    
    3. 递归
        function flatten(arr) {
            var res = [];
            arr.map(item => {
                if(Array.isArray(item)) {
                    res = res.concat(flatten(item));
                } else {
                    res.push(item);
                }
            });
            return res;
        }

    4. 扩展运算符
        function flatten(arr) {
            while(arr.some(item=>Array.isArray(item))) {
                arr = [].concat(...arr);
            }
            return arr;
        }

    5. reduce()
        function flatten(arr) {  
            return arr.reduce((result, item)=> {
                return result.concat(Array.isArray(item) ? flatten(item) : item);
            }, []);
        }
*/

// var  arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur);
//     return prev + cur;
// }, 9)
// console.log(arr, sum); // [] 0


let arr = [1, [2, 3, [4, 5]]]
function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        console.log(item);
        return Number(item);
    })
} 
console.log(flatten(arr));

// function flatten(arr) {  
//     return arr.reduce((result, item)=> {
//         return result.concat(Array.isArray(item) ? flatten(item) : item);
//     }, []);
// }

// console.log(flatten(arr));

// let arr = [1,1,2,3,'','',false,false,5]
// let arr2 = new Set(arr)
// console.log(arr2);
// console.log(Array.from(arr2));
/*
    js去重
    1. es6去重
        Set类型自动去重
        Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
       
        Array.from(new Set(arr))
    
    2. indexOf()
        NaN无法去重

    3. filter()
*/
/*
    js遍历
    1. 普通for循环
        for(let i = 0; i < arr.length; i++){}

    2. 优化版for循环————性能最优
        for(let i = 0, len = arr.length; i < len; i++){}

    3. for...in...————效率最低
        for(let i in arr){}         //i为下标

    4. for...of...————性能要好于for..in，但仍然比不上普通for循环
        for(let i of arr){}         //i为数组中的每一项数据
    
    5. forEach()————forEach的性能比普通的for循环弱，无法break/continue退出循环，可以return退出本次循环，只能抛出错误来终止循环
        arr.forEach((item, index, arr) => {})

    6. some()————如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回false。
        res = arr.some((item, index, arr) => { return item == 0 })

    7. every()————如果所有元素都满足条件，则返回 true。如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
        res = arr.every((item, index, arr) => { return item == 1 })

    8. filter()————return的值为true的数据项
        res = arr.filter((item, index, arr) => { return item })

    9. map()————所有的return值
        res = arr.map((item, index, arr) => { return item })

    10. find()————所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
        res = arr.find((item, index, arr) => { return item })

    11. findIndex()
*/