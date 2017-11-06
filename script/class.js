class Person{
    constructor(name,age){ // ���캯��
        this.name=name;
        this.age=age;
    }
    sayHello(){
        return "Hello"+this.name;
    }
    static classMethod() { //��̬������ES6�����в����ھ�̬���ԣ�ֻ���ھ�̬����
        return 'hello';
    }
}
var p1=new Person("name",24);
p1.constructor===Person.prototype.constructor;


//��ļ̳У���ES5ͨ��ԭ�ͼ̳���ȣ� ES6�̳���ͨ��extend�ؼ�����ʵ�ֵ�
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// ���������constructor�����е���super�����������½�ʵ��ʱ�ᱨ��
// ������Ϊ����û���Լ���this���󣬶��Ǽ̳и����this����
// Ȼ�������мӹ������������super����������͵ò���this����
class ColorPoint extends Point {
    constructor(x, y, color) {
        this.color = color; // ReferenceError,ֻ����super�ؼ���֮��ʹ��this
        super(x, y);
        this.color = color; // ��ȷ
    }
}
// ES5 �ļ̳У�ʵ�����ȴ��������ʵ������this��Ȼ���ٽ�����ķ�����ӵ�this���棨Parent.apply(this)����
// ES6 �ļ̳л�����ȫ��ͬ��ʵ�����ȴ��츸���ʵ������this�����Ա����ȵ���super��������Ȼ����������Ĺ��캯���޸�this��



// ʹ����������жϣ�һ�����Ƿ�̳�����һ���ࡣ
Object.getPrototypeOf(ColorPoint) === Point;// true
