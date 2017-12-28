var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
      if (typeof a ==='number' &&typeof b === 'number'){
        resolve(a+b);
      } else {
        reject("not numbers");
      }
    },1500)
  })
};


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//   //  resolve('hey it worked');
//   reject('unable to fulfil promise')
//   }, 2000)
//
// });
//
// somePromise.then((message)=> {
//   console.log('success:', message);
// }, (errorMessage)=>{
// console.log(errorMessage);
//
// });

asyncAdd(4,3).then((result) =>{
  console.log(result);
  return asyncAdd(result, '33');
}).then((res) =>{
  console.log(res);
}).catch((errorMessage) =>{
  console.log(errorMessage);
});
