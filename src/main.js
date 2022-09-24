 import "./css/index.less"; 

 const a = "Hello world";

 function test(){
     new Promise((resolve)=>{
        console.log(a);
        resolve(a);
     })
 }

 test();