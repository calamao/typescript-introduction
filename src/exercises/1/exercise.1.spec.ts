import { getSalary } from "./exercise.1";

interface IGetSalary {
    (salary: number, bonus: boolean): number;
}

describe('GetSalary', () => {
    let getSalaryFunction: IGetSalary = <any>getSalary;
    let salary: 1000;
    it('should get salary when no bonus', () => {
        expect(getSalaryFunction(salary, false)).toEqual(salary);
    });

    it('should get salary multiplied by 10 when bonus', () => {
        expect(getSalaryFunction(salary, true)).toEqual(salary * 10);
    });
});