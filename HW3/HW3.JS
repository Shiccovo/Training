// myReduce
Array.prototype.myReduce = function (fn,initacc){
    let acc = initacc !== undefined ? initacc : this[0];

    for (let i = initacc !== undefined?0 : 1 ; i < this.length; i++) {
        acc = fn(acc,this[i],this);
    }
    return acc;
};

// TEST
console.log(
    [175,25,300].myReduce(function(acc,cur) {
        return acc - cur;
    },300)
);

