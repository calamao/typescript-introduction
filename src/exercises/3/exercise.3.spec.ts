// import { filterTheArray } from "./exercise.3";
import { filterTheArray } from "./exercise.3";
// import { filterTheArray } from "../../solutions/3/exercise.3";

interface IFilterTheArray {
    <T>(array: T[], filter: (val: T) => boolean): T[];
}

describe('FilterTheArray', () => {
    let targetTest: IFilterTheArray = <any>filterTheArray;
    it('should get a new array with pair values', () => {
        expect(targetTest([1, 2, 4, 8], (value) => {
            // only pairs
            return value % 2 === 0;
        })).toEqual([2, 4, 8]);
    });

    it('should get a new array with greater than 5 values', () => {
        expect(targetTest([1, 2, 4, 8], (value) => {
            // only greater than 5
            return value > 5;
        })).toEqual([8]);
    });

    it('should get a new array  ["Apple", "Pear"] ', () => {
        expect(targetTest(["Car", "Tea", "Apple", "TypeScript", "Pear"], (value) => {
            // only greater than 5
            return value === "Apple" || value === "Pear";
        })).toEqual(["Apple", "Pear"]);
    });
});