Array.prototype.myFilter = function (callbackFunc, addParam) {

    let result = [];

    if (addParam === undefined) {
        addParam = false;
        for (let i = 0; i < this.length; i++) {
            if (callbackFunc(this[i], i, this)) result.push(this[i]);
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            if (callbackFunc.call(addParam, this[i], i, this)) result.push(this[i]);
        }
    }
    return result;
};


const createDebounceFunction = (func, delayTime) => {

    let timeoutID = null;

    return () => {
        if (timeoutID !== null) {
            delayTime = timeoutID._idleTimeout;
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(func, delayTime);
    };
};