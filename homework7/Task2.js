function promiseAllSettled(arr){
    return new Promise((resolve) => {
        const result = [];

        if(arr.length === 0) return resolve(result);

        arr.forEach((prom, index) => {
            Promise.resolve(prom)
            .then((value) =>{
                result[index] =  {status:'fulfilled', value:value};
            }).catch((err =>{
                result[index] = {status:'rejected', reason:err}
            })).finally(()=>{
                return resolve(result);
            })
        });
    })

}

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
  ];
  
  promiseAllSettled(promises)
    .then(results => {
      console.log("All promises settled:", results);
      // Expected: [{ status: 'fulfilled', value: 1 },
      //            { status: 'rejected', reason: 'Error occurred' },
      //            { status: 'fulfilled', value: 3 }]
    });