function print(str){
    let res = [];
    function find(str1, str2){
        if(str1.length == 0){
            res.push(str2);
            return;
        }
        for(let i = 0; i < str1.length; i++){
            let temp = str1.split('');
            temp.splice(i,1);
            find(temp.join(''), str2+str1[i]);
        }
    }
    find(str,'')
    return res
}
console.log(print("abc"));