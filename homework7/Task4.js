//i write this comments because the logic here was a little confusing to me 

//Takes a call back function to convert it to a function that returns a promise
function promisify(callB){
    //i return a function that takes a single argument (for multiples i should do ...args)
    return function (args) {
        //that function should return a promise (i usually omit reject but since i use it here, is define just in case)
        return new Promise((resolve, reject) =>{
            //calling the original call back function
            callB(args, (err, result)=>{
                if(err){
                    reject(err);
                } else{
                    resolve(result)
                }

            });
        });
    };
};

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
      if (value > 0) {
        callback(null, value * 2);
      } else {
        callback("Invalid value", null);
      }
    }, 1000);
  }
  
  const promisedFunction = promisify(callbackStyleFunction);
  
  promisedFunction(3)
    .then(result => {
      console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
      console.error("Promised function error:", error);
    });