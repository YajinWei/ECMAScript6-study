// 数值的扩展

//二进制和八进制的新的表示方法
//ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
0b111110111 === 503 // true
0o767 === 503 // true

// Number.isFinite(),Number.isFinite()用来检查一个数值是否为有限的（finite）。
// Number.isNaN(),Number.isNaN()用来检查一个值是否为NaN。

// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
// ES5的写法
parseInt('12.34'); // 12
parseFloat('123.45#'); // 123.45

// ES6的写法
Number.parseInt('12.34');// 12
Number.parseFloat('123.45#'); // 123.45



// Number.EPSILON:ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示1与大于1的最小浮点数之间的差
0.1+0.2 //0.30000000000000004
Number.EPSILON // 2.220446049250313e-16
// 其实EPSILON表示能够接受的误差
//即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。


