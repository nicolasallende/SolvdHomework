function lazyMap(arr,mapFunc){
    let index = 0;

    return {
    //this mimics how te iterator works 
        next: function(){
            if(index < arr.length){
                const value = mapFunc(arr[index]);
                index++;
                //tha name has to be "done" otherwise the iterator for ..of doesn't work
                return {value, done: false};
            }else{
                return {value: undefined, done: true};
            }
        },

        //this makes the object capable f being used with for ...of  

        [Symbol.iterator] : function(){
            return this;
        }
    };
};





//Test lazyMap

for (const val of lazyMap([1, 2, 3], x => (x * 2))) {
    console.log(val);
  }