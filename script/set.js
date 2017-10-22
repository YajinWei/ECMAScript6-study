// set数据结构，最大的特点就是它不包含重复的值
//Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
var set1=new Set([1,2,3,3,5]);
set1//{1,2,3,5}

// 转换为数组,这种操作也是可以对数组去重的一种操作
[...set1]; // [1,2,3,5]

// 操作方法有四个
//add(value)：添加某个值，返回Set结构本身。
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
//has(value)：返回一个布尔值，表示该值是否为Set的成员。
//clear()：清除所有成员，没有返回值。

//遍历方法也有四个
//keys()：返回键名的遍历器
//values()：返回键值的遍历器
//entries()：返回键值对的遍历器
//forEach()：使用回调函数遍历每个成员


let set2=new Set([1,2,3]);
set2=new Set([...set2].map(item=>item*2));// {2,4,6}


// 有了set数据结构，很容易实现交集，并集 ，差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}


/**
 * WeakSet
 * 该数据结构的特点是也是不重复值的集合，它的成员只能是对象。
 */
const obj=[{name:'wei'},{age:24}];
const ws = new WeakSet(obj);
// WeakSet {{name:'wei'},{age:24}}

const b = [3, 4];
const ws1 = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
