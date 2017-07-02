export class Fibonacci {

    public getNthNumber(n: number): number {
        if (n === 0)
            return 0;
        else if (n === 1)
            return 1;
        else
            return this.getNthNumber(n - 1) + this.getNthNumber(n - 2);
    }

}