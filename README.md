# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

The asymptotic complexity of tail-recursive fibonacci is different from the non-tail-recursive version. The reason for this is because the tail-recursive fibonacci will run for linear time or $\Theta(n)$. This is because this version makes one recursive call at the end. Whereas in non-tail-recursive fibonacci, we know that this will make two recursion calls that gives it a complexity of $\Theta(2^n)$. This is actually a very big difference proving that the tail-recursive implementation is more efficient than the non-tail-recursive version. 


referenced: 
https://www.geeksforgeeks.org/tail-recursion-fibonacci/
and
https://www.geeksforgeeks.org/tail-recursion/
as well as lecture slides for a tail recursion explination

I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.
