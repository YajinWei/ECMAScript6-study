//��������λ�÷���
//includes()�����ز���ֵ����ʾ�Ƿ��ҵ��˲����ַ�����
//startsWith()�����ز���ֵ����ʾ�����ַ����Ƿ���ԭ�ַ�����ͷ����
//endsWith()�����ز���ֵ����ʾ�����ַ����Ƿ���ԭ�ַ�����β����
let originalStr='hello world';
originalStr.includes('llo',1)//true
originalStr.startsWith('he')//true
originalStr.endsWith('ld')//true

// ����һ��repeat����������ԭ�ַ����ظ�n��
'x'.repeat(3); // "xxx"

// ��ȫ�ַ����ķ���
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'


let age=24;
// ģ���ַ���
let templateStr=`weiyajin's age is ${age}`;
console.log(templateStr);