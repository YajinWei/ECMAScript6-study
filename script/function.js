/**
 * ����
 */

//����1��Ϊ����������Ĭ��ֵ

function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello'); // Hello World
log('Hello', 'China'); // Hello China
log('Hello', ''); // Hello

//��ͷ����,������Ҫע����Ǽ�ͷ�����е�thisָ���ǹ̶�
//��1���������ڵ�this���󣬾��Ƕ���ʱ���ڵĶ��󣬶�����ʹ��ʱ���ڵĶ���
//��2�������Ե������캯����Ҳ����˵��������ʹ��new���������׳�һ������
//��3��������ʹ��arguments���󣬸ö����ں������ڲ����ڡ����Ҫ�ã������� rest �������档
//��4��������ʹ��yield�����˼�ͷ������������ Generator ������
let fn=(x,y,...rest)=>{
    console.log(rest);
    return x+y;
};
console.log(fn(1,2,3,4));


