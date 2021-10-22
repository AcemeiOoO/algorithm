
var p = { v: 1 }
function func(param) {
    param.v = 2
    param = { v: 3 }
    param.v = 4
}
func(p)
console.log(p.v);




// 函数形参有默认值的问题
function side(arr) {
    arr[0] = arr[2];
}
function func1(a, b, c = 3) {
    c = 10;//没有改变arguments里的c，像重新定义的变量
    console.log('arguments', arguments);
    side(arguments);
    console.log('arguments', arguments);
    console.log(a + b + c);//1+1+10
}
function func2(a, b, c) {
    c = 10;//改变了arguments里的c
    console.log('arguments', arguments);
    side(arguments);
    console.log('arguments', arguments);
    console.log(a + b + c);
}
func1(1, 1, 1);
func2(1, 1, 1);