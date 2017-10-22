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