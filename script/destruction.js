/**
 * �����Ľ⹹��ֵ.
 * ��ע�������ϣ�����д�����ڡ�ģʽƥ�䡱��ֻҪ�Ⱥ����ߵ�ģʽ��ͬ����ߵı����ͻᱻ�����Ӧ��ֵ
 * ��ʵ�ϣ�ֻҪĳ�����ݽṹ���� Iterator �ӿڣ������Բ���������ʽ�Ľ⹹��ֵ
 */
//�򵥵���ʽ
let [a,b,c]=[1, 2, 3];
console.log(a);//1
console.log(b);//2


let [head, ...tail] = [1, 2, 3, 4];
console.log(head);//1
console.log(tail);//[2, 3, 4]


// ����⹹���ɹ����ḳֵundefined
let [unsucce1,unsucce2]=[1];
console.log(unsucce1);//1
console.log(unsucce2);//undefined


// ����ȫ�⹹
let [x, y] = [1, 2, 3];
console.log(x);//1
console.log(y);//2

// ����Ⱥŵ��ұ߲������飨�����ϸ��˵�����ǿɱ����Ľṹ���μ���Iterator��һ�£�����ô���ᱨ��
// �������䶼�ᱨ����Ϊ�Ⱥ��ұߵ�ֵ��ҪôתΪ�����Ժ󲻾߱� Iterator �ӿڣ�ǰ������ʽ����Ҫô����Ͳ��߱� Iterator �ӿڣ����һ�����ʽ����
//let [foo] = 1;// ����
//let [foo] = false;// ����
//let [foo] = NaN;// ����
//let [foo] = undefined;// ����
//let [foo] = null;// ����
//let [foo] = {};// ����


// �⹹��ֵ��Ĭ��ֵ,ES6 �ڲ�ʹ���ϸ�����������===�����ж�һ��λ���Ƿ���ֵ�����ԣ����һ�������Ա���ϸ����undefined��Ĭ��ֵ�ǲ�����Ч�ġ�
let [u,i,o=3]=[1, 2];
console.log(u);//1
console.log(i);//2
console.log(o);


// ���Ĭ��ֵ��һ�����ʽ����ô�ñ��ʽ�Ƕ�����ֵ
function LazyFn() {
    console.log('aaa');
}
let [l = LazyFn()] = [1];//LazyFn������������


/**
 * ����Ľ⹹��ֵ
 */
let gg = {name,age}={name: 'weiyajin', age: 24};
console.log(gg);// {name:'weiyajin',age:24}

/**
 * �ַ����Ľ⹹��ֵ
 * �ַ���Ҳ���Խ⹹��ֵ��������Ϊ��ʱ���ַ�����ת������һ����������Ķ���
 */
let [f,g,j]='wei';
console.log(f, g, j);//w e i


/**
 * ��ֵ�Ͳ���ֵ�Ľ⹹��ֵ
 * �⹹��ֵʱ������Ⱥ��ұ�����ֵ�Ͳ���ֵ�������תΪ����
 */
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true


/**
 * ���������Ľ⹹��ֵ
 */
function move({x=0,y=-1}={}) {
    "use strict";
    return [x, y];
}
move({x=3,y=4});//[3,4]
move({x=3});//[3,-1]
