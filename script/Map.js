/**
 * Map��js����ı����Ǽ�ֵ�Եļ��ϣ�Ҳ����Hash�ṹ
 * �����ݽṹ���ص��Ǵ洢����ͻ����֮ǰֻ��ʹ���ַ�����Ϊ�������������
 * Object �ṹ�ṩ�ˡ��ַ�����ֵ���Ķ�Ӧ��Map�ṹ�ṩ�ˡ�ֵ��ֵ���Ķ�Ӧ����һ�ָ����Ƶ� Hash �ṹʵ��
 */
let m=new Map();
let obj={first_name:'wei'};
m.set(obj,'yajin');
console.log(m);


let m1=new Map();

//�����ݽṹ����set��get��has��deleteʵ������

// MapתΪ���飬ͨ����չ�����...��ת��
const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
[...myMap]// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// ����תΪMap��ֱ�Ӹ�Map���캯���������鼴��
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
])

// Mapת��Ϊ����
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
