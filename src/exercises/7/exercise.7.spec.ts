import {isLeapYear} from './exercise.7';
// import {isLeapYear} from "../../solutions/7/exercise.7";

describe('A leap year', () => {

    let targetTest = <any>isLeapYear;

    it('is not very common', () => {
        expect(targetTest(2015)).toBeFalsy();
    });

    it('is introduced every 4 years to adjust about a day', () => {
        expect(targetTest(2016)).toBeTruthy();
    });

    it('is skipped every 100 years to remove an extra day', () => {
        expect(targetTest(1900)).toBeFalsy();
    });

    it('is reintroduced every 400 years to adjust another day', () => {
        expect(targetTest(2000)).toBeTruthy();
    });

    describe('Additional example of a leap year that', () => {

        it('is not a leap year', () => {
            expect(targetTest(1978)).toBeFalsy();
        });

        it('is a common leap year', () => {
            expect(targetTest(1992)).toBeTruthy();
        });

        it('is skipped every 100 years', () => {
            expect(targetTest(2100)).toBeFalsy();
        });

        it('is reintroduced every 400 years', () => {
            expect(targetTest(2400)).toBeTruthy();
        });
    });
});