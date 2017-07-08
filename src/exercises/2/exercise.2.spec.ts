import { doubleTheArray } from "./exercise.2";
// import { doubleTheArray } from "../../solutions/2/exercise.2";

interface IDoubleTheArray {
    (numberArray: number[]): number[];
}

describe('DoubleArray', () => {
    let targetTest: IDoubleTheArray = <any>doubleTheArray;
    it('should get a new array with doubled values', () => {
        expect(targetTest([1, 2, 4, 8])).toEqual([2, 4, 8, 16]);
    });
});