//main fibonacci function that wull calculate the nth fib number
//using the tailRecursionFib as a helper to calculate the results
function fib(n) {
    let n1 = 0;
    let n2 = 1;
    return tailRecursionFib(n, n1, n2);

}

function tailRecursionFib(n, n1, n2) {
    //base case if n is 0 return the first
    if (n === 0) {
        return n1;
    } 
    //base case if n is 1 return the second number
    if (n === 1) {
        return n2;
    }
    //here is the one recursion call that provides us with the difference in complexity
    //we need to decrement n, we then make n2 the new first, and n1+n2 will become our new second
    //this allows for us to move forward
    return tailRecursionFib(n - 1, n2, n1 + n2);
}
