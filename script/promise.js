"use strict";

/**
 * promise����
 * Promise ���첽��̵�һ�ֽ���������ȴ�ͳ�Ľ�����������ص��������¼�����������͸�ǿ��
 */
//���ֵ�ԭ�򣬻ص�����������Գ�Ŀຣ
setTimeout(function(){
    console.log(1);
    setTimeout(function(){
        console.log(2);
        setTimeout(function(){
            console.log(3);
            setTimeout(function(){
                console.log(4);
                setTimeout(function(){
                    console.log(5);
                },500)
            },400)
        },300)
    },200)
},100);

promise.then(function (response) {
    //do something;
}, function (reason) {
    //get error
}).then(function (response) {
    //do something;
}, function (reason) {
    //get error
}).then(function (response) {
    //do something;
}, function (reason) {
    //get error
});

// promise�߱������ص�
//��1�������״̬�������Ӱ�졣Promise�������һ���첽������������״̬��pending�������У���fulfilled���ѳɹ�����rejected����ʧ�ܣ���
// ֻ���첽�����Ľ�������Ծ�����ǰ����һ��״
// ̬���κ������������޷��ı����״̬����Ҳ��Promise������ֵ�����������Ӣ����˼���ǡ���ŵ������ʾ�����ֶ��޷��ı䡣

//��2��һ��״̬�ı䣬�Ͳ����ٱ䣬�κ�ʱ�򶼿��Եõ���������Promise�����״̬�ı䣬ֻ�����ֿ��ܣ���pending��Ϊfulfilled�ʹ�pending��Ϊrejected��
// ֻҪ���������������״̬�������ˣ������ٱ��ˣ���һֱ��������������ʱ�ͳ�Ϊ resolved���Ѷ��ͣ���


//����������������ʵ�֣�ES6����д�������Ա�׼��ͳһ��д��





/**
 * promise��ajax������
 */
var getJSON=function(){
    "use strict";
    var promise=new Promise(function(resolve,reject){
        var client=new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange=handler;
        client.responseType="json";
        client.setRequestHeader("Accept","application/json");
        client.send();

        function handler(){
            if(this.readyState!==4){
                return;
            }
            if(this.status===200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        return promise;
    })
};

getJSON('../TestData/promise-test.json').then(function(){
    "use strict";
    console.log('Contents: ' + json);
},function(){
    "use strict";
    console.error('������', error);
});

//var promise=new Promise(function(resolve,reject){
//    "use strict";
//    // do something
//});

/**
 * ��ʵ��promise
 * ���Ǵ�����һ��promise����Ȼ����Ե���������then ����ȥȡֵ��������Ƕȿ���������캯��һ����
 * ������һ������then�����Ķ������⻹��״̬����״̬�ı仯������
 */
function doSomething(callback){
    console.log("do something.");
    return {
        then:function(callback){
            var value=1;
            callback(value);
        }
    }
}
doSomething().then(function(response){
    console.log(response);
});
// ��ES6��Promise��һ�����캯������ô���Ǿ͸�doSomething������������
function Promise(){
    this.then=function(callback){
        var value=1;
        callback(value);
    }
}