import { Fibonacci } from './fibonacci';

describe('Fibonacci', () => {
    const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986];

    it('should start by 0', () => {
        const fib = new Fibonacci();
        expect(fib.getNthNumber(0)).toEqual(0);
    });

    it('should start by 30th position matches the fibonacci sequence', () => {
        const fib = new Fibonacci();
        expect(fib.getNthNumber(30)).toEqual(fibSequence[30]);
    });
});
