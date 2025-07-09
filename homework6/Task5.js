function throttle(func, interval){
    let lastExecuted = 0;
  
    return function (...args) {
      const now = Date.now();
      if (now - lastExecuted >= interval) {
        func.apply(this, args);
        lastExecuted = now;
      }
    };
}

//-- Given to me 
function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);