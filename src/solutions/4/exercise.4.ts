
/**
 * In this example we mix some tasty fruit juice. We can add some components with certain amounts. 
 * Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.
 * 
Example:

You take an empty jar for your juice
Whenever the jar is empty, the concentrations are always 0
Now you add 200 units of apple juice
And then you add 200 units of banana juice
Now the concentration of apple juice is 0.5 (50%)
Then you pour out 200 units
The concentration of apple juice is still 50%
Then you add 200 units of apple juice again
Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
 */
interface IJar {
    add: (amount: number, type: string) => void;
    pourOut: (amount: number) => void;
    getTotalAmount: () => number;
    getConcentration: (type: string) => number;
}

// type ArrayStringKey<T> = {
//     [key: string]: T;
// }
export class Jar implements IJar {
    ingredients: { [label: string]: number } = {};
    total: number = 0;

    add(amount: number, type: string) {
        let ingredientAmount = this.ingredients[type] || 0;
        this.ingredients[type] = ingredientAmount + amount;
        this.total += amount;
    };
    pourOut(amount: number) {
        // rest the same percentage to each ingredient
        let remainingPercentage = (1 - amount / this.total);
        for (let key in this.ingredients) {
            this.ingredients[key] *= remainingPercentage;
        }
        this.total -= amount;
    }
    getTotalAmount() {
        return this.total;
    };
    getConcentration(type: string) {
        return this.ingredients[type] / this.total;
    };

    /**
     * print for testing purposes
     */
    print() {
        for (let key in this.ingredients) {
            console.log(`key: '${key}', value: ${this.ingredients[key]}`);
        }
    }


}