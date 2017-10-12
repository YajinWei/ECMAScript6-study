// 输出变量，写法一
export var firstName = 'wei';
export var lastName = 'yajin';
export var bornYear = 1993;

// 输出变量，写法二
var x=2;
var y='hello world';
export {x,y};

// 输出函数
function addition(a,b){
    "use strict";
    return a+b;
}
export {addition as addFn} // 可以给输出的方法设置一个别名

// export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错
