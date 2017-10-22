/**
 * 函数
 */

//特性1：为函数参数赋默认值

function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello

//箭头函数,尤其需要注意的是箭头函数中的this指向是固定
//（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
//（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
//（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
let fn=(x,y,...rest)=>{
    console.log(rest);
    return x+y;
};
console.log(fn(1,2,3,4));


