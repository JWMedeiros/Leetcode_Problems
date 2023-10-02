function findFibonacci(num) {
    if (num <=1) return 1;

    return findFibonacci(num - 1) + findFibonacci(num - 2)
}