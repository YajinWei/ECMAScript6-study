"use strict";

/**
 * promise对象
 * Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
 */
//出现的原因，回调地狱，程序猿的苦海
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

// promise具备两个特点
//（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
// 只有异步操作的结果，可以决定当前是哪一种状
// 态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

//（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
// 只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。


//最初在社区提出并且实现，ES6将其写入了语言标准，统一了写法





/**
 * promise与ajax结合理解
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
    console.error('出错了', error);
});

//var promise=new Promise(function(resolve,reject){
//    "use strict";
//    // do something
//});

/**
 * 简单实现promise
 * 我们创建了一个promise对象，然后可以调用它的用then 方法去取值，从这个角度看，这个构造函数一定是
 * 返回了一个带有then方法的对象。另外还有状态，且状态的变化不可逆
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
// 在ES6中Promise是一个构造函数，那么我们就给doSomething方法换个名字
function Promise(){
    this.then=function(callback){
        var value=1;
        callback(value);
    }
}