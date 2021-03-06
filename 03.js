// 三种方式创造对象

// 第一种
let obj1 = {
    name: 'Jack',
    age: 19
}

// 第二种
let obj2 = new Object();
obj2.name = 'Mike';
obj2.age = 19;

// 第三种
function Person(){
    this.name = 'Black';
    this.age = 19;
}
let p = new Person();

// 信息表

// 复制函数
function copy(insertObj){
    let newObj = {};
    if (insertObj instanceof Array){
        newObj = [];
    }
    for (let i in insertObj){
        let obo =insertObj[i];
        newObj[i] = typeof obo ==='object' ? copy(obo):obo;
    }
    return newObj;
}
// 输出
let objA = copy(obj1);
let objB = copy(obj2);
let objC = copy(p);
let arr = [];
arr.push(objA,objB,objC);
console.table(arr);