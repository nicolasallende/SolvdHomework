function promiseAll(arr){
    return new Promise((resolve) => {
        const result = [];

        if(arr.length === 0) return resolve(result);

        let countResult = 0;

        arr.forEach((promise, indx) => {
            Promise.resolve(promise).then(value => {
                result[indx] = value;
                countResult++;

                if(countResult === arr.length) return resolve(result);
            })
            .catch(err => {
                reject(err);
            });
        });
    });
};

// basic test given to us ------------------------
const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });