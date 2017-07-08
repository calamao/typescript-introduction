
/**
 * Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
 * If bonus is true, the salary should be multiplied by 10.
 */
export function getSalary(salary: number, bonus: boolean): number {
    if (bonus) {
        return salary * 10;
    }

    return salary;
}