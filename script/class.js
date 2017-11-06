class Person{
    constructor(name,age){ // 构造函数
        this.name=name;
        this.age=age;
    }
    sayHello(){
        return "Hello"+this.name;
    }
    static classMethod() { //静态方法，ES6的类中不存在静态属性，只存在静态方法
        return 'hello';
    }
}
var p1=new Person("name",24);
p1.constructor===Person.prototype.constructor;


//类的继承，与ES5通过原型继承相比， ES6继承是通过extend关键字来实现的
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
// 这是因为子类没有自己的this对象，而是继承父类的this对象，
// 然后对其进行加工。如果不调用super方法，子类就得不到this对象。
class ColorPoint extends Point {
    constructor(x, y, color) {
        this.color = color; // ReferenceError,只能在super关键字之后使用this
        super(x, y);
        this.color = color; // 正确
    }
}
// ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
// ES6 的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。



// 使用这个方法判断，一个类是否继承了另一个类。
Object.getPrototypeOf(ColorPoint) === Point;// true
