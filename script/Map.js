/**
 * Map，js对象的本质是键值对的集合，也就是Hash结构
 * 该数据结构的特点是存储对象，突破了之前只能使用字符串作为对象键名的限制
 * Object 结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现
 */
let m=new Map();
let obj={first_name:'wei'};
m.set(obj,'yajin');
console.log(m);


let m1=new Map();

//该数据结构具有set，get，has，delete实例方法

// Map转为数组，通过扩展运算符...来转换
const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
[...myMap]// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// 数组转为Map，直接给Map构造函数传入数组即可
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
])

// Map转换为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap = new Map()
    .set('yes', true)
    .set('no', false);
strMapToObj(myMap)
// { yes: true, no: false }
