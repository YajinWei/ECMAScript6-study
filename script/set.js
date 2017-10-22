// set���ݽṹ�������ص�������������ظ���ֵ
//Set �������Խ���һ�����飨���߾��� iterable �ӿڵ��������ݽṹ����Ϊ������������ʼ����
var set1=new Set([1,2,3,3,5]);
set1//{1,2,3,5}

// ת��Ϊ����,���ֲ���Ҳ�ǿ��Զ�����ȥ�ص�һ�ֲ���
[...set1]; // [1,2,3,5]

// �����������ĸ�
//add(value)�����ĳ��ֵ������Set�ṹ����
//delete(value)��ɾ��ĳ��ֵ������һ������ֵ����ʾɾ���Ƿ�ɹ���
//has(value)������һ������ֵ����ʾ��ֵ�Ƿ�ΪSet�ĳ�Ա��
//clear()��������г�Ա��û�з���ֵ��

//��������Ҳ���ĸ�
//keys()�����ؼ����ı�����
//values()�����ؼ�ֵ�ı�����
//entries()�����ؼ�ֵ�Եı�����
//forEach()��ʹ�ûص���������ÿ����Ա


let set2=new Set([1,2,3]);
set2=new Set([...set2].map(item=>item*2));// {2,4,6}


// ����set���ݽṹ��������ʵ�ֽ��������� ���
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// ����
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// ����
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// �
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}


/**
 * WeakSet
 * �����ݽṹ���ص���Ҳ�ǲ��ظ�ֵ�ļ��ϣ����ĳ�Աֻ���Ƕ���
 */
const obj=[{name:'wei'},{age:24}];
const ws = new WeakSet(obj);
// WeakSet {{name:'wei'},{age:24}}

const b = [3, 4];
const ws1 = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(��)
