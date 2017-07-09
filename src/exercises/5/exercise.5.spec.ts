import { addArrayCustomFunctions } from "./exercise.5";
// import { addArrayCustomFunctions } from "../../solutions/5/exercise.5";

describe('MyCustomArrayFunctions Range', () => {
    // this function should add the special implementation to the array
    addArrayCustomFunctions();

    it('function Range should return array with specified length', () => {
        expect(Array.range(0, 10).length).toEqual(10);
    });

    it('function Range should specified array output', () => {
        expect(Array.range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('function Range should specified array output', () => {
        expect(Array.range(-5, 10)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]);
    });

});

describe('MyCustomArrayFunctions Range and Sum', () => {
    // this function should add the special implementation to the array
    addArrayCustomFunctions();

    it('function sum should return the sum of the numbers of the array', () => {
        expect([1, 5, 4].sum()).toEqual(10);
    });

    it('function sum should return the sum of the numbers of the array', () => {
        expect([-1, 1, 5, 4].sum()).toEqual(9);
    });

    it('range and sum should be well combined', () => {
        expect(Array.range(0, 5).sum()).toEqual(10);
    });

});