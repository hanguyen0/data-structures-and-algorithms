
'use strict';

var compose = function() {
    const args = arguments;
    return function(name) {
        let n = name;
        let total = 0;
        for(let i = args.length - 1; i >=0; i--) {
            let current = args[i];
            n = current(n);
            total=n;
        }

        return total;
    }
};
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}
var welcome = compose(greet, exclaim);
console.log(welcome('phillip')); // 'hi: PHILLIP!'

var pipe = function() {
    const args = arguments;
    
    // console.log(args);
    return function(num) {
        let n = num;
        let total = 0;
        for(let i = 0; i < args.length; i++) {
            let current = args[i];
            n = current(n);
            // console.log(n);
            total=n;
            // console.log('total', total);
        }
        // const n = fun1(num);
        return total;
    }
};

var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }
// console.log(pipe(add2, multiplyBy3)(5)) // 21
// console.log(pipe(add2, multiplyBy3, multiplyBy3)(5)) // 63
