// TypeScript extensions for the Standard Array
interface Array<T> {
    sum: (this: Array<number>) => number;
}

interface ArrayConstructor {
    range: (this: void, start: number, count: number) => Array<number>;
}
