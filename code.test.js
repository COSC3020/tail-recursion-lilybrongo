const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function testFib() {
    if (n == 1) {
        return 1;
    }
    if (n == 0) {
        return 0;
    }
    return testFib(n-1) + testFib(n-2);
}

const test = 
    jsc.forall("nat", function(n) {
        return JSON.stringify(testFib(n)) == 
            JSON.stringify(fib(n));
    });
jsc.assert(test);