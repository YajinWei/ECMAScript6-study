//新增三个位置方法
//includes()：返回布尔值，表示是否找到了参数字符串。
//startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
//endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
let originalStr='hello world';
originalStr.includes('llo',1)//true
originalStr.startsWith('he')//true
originalStr.endsWith('ld')//true

// 新增一个repeat方法用来讲原字符串重复n次
'x'.repeat(3); // "xxx"

// 补全字符串的方法
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


let age=24;
// 模板字符串
let templateStr=`weiyajin's age is ${age}`;
console.log(templateStr);