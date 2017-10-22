/**
 * 变量的解构赋值.
 * 备注：本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
 * 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
 */
//简单的形式
let [a,b,c]=[1, 2, 3];
console.log(a);//1
console.log(b);//2


let [head, ...tail] = [1, 2, 3, 4];
console.log(head);//1
console.log(tail);//[2, 3, 4]


// 如果解构不成功，会赋值undefined
let [unsucce1,unsucce2]=[1];
console.log(unsucce1);//1
console.log(unsucce2);//undefined


// 不完全解构
let [x, y] = [1, 2, 3];
console.log(x);//1
console.log(y);//2

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
// 下面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（最后一个表达式）。
//let [foo] = 1;// 报错
//let [foo] = false;// 报错
//let [foo] = NaN;// 报错
//let [foo] = undefined;// 报错
//let [foo] = null;// 报错
//let [foo] = {};// 报错


// 解构赋值的默认值,ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
let [u,i,o=3]=[1, 2];
console.log(u);//1
console.log(i);//2
console.log(o);


// 如果默认值是一个表达式，那么该表达式是惰性求值
function LazyFn() {
    console.log('aaa');
}
let [l = LazyFn()] = [1];//LazyFn根本不会运行


/**
 * 对象的解构赋值
 */
let gg = {name,age}={name: 'weiyajin', age: 24};
console.log(gg);// {name:'weiyajin',age:24}

/**
 * 字符串的解构赋值
 * 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
 */
let [f,g,j]='wei';
console.log(f, g, j);//w e i


/**
 * 数值和布尔值的解构赋值
 * 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
 */
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true


/**
 * 函数参数的解构赋值
 */
function move({x=0,y=-1}={}) {
    "use strict";
    return [x, y];
}
move({x=3,y=4});//[3,4]
move({x=3});//[3,-1]
