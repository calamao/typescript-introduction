import { Jar } from "./exercise.4";
// import { Jar } from "../../solutions/4/exercise.4";

interface IJar {
    add: (amount: number, type: string) => void;
    pourOut: (amount: number) => void;
    getTotalAmount: () => number;
    getConcentration: (type: string) => number;
}

describe('TheFruitJuice', () => {
    it('should get 100ml and 100% concentration Apple', () => {
        let targetTest: IJar = <any>new Jar();
        targetTest.add(20, "Apple");
        targetTest.add(80, "Apple");
        expect(targetTest.getTotalAmount()).toEqual(100);
        expect(targetTest.getConcentration("Apple")).toEqual(1);
    });

    it('should get 100ml and 50% concentration Apple 50% Pear', () => {
        let targetTest: IJar = <any>new Jar();
        targetTest.add(20, "Apple");
        targetTest.add(80, "Pear");
        expect(targetTest.getTotalAmount()).toEqual(100);
        expect(targetTest.getConcentration("Apple")).toEqual(0.2);
        expect(targetTest.getConcentration("Pear")).toEqual(0.8);
    });

    it('should get 100ml and 10% concentration Apple %40 Pear, 50% Banana', () => {
        let targetTest: IJar = <any>new Jar();
        targetTest.add(20, "Apple");
        targetTest.add(80, "Pear");
        targetTest.add(50, "Banana");
        targetTest.add(50, "Banana");
        expect(targetTest.getTotalAmount()).toEqual(200);
        expect(targetTest.getConcentration("Apple")).toEqual(20 / 200);
        expect(targetTest.getConcentration("Pear")).toEqual(80 / 200);
        expect(targetTest.getConcentration("Banana")).toEqual(100 / 200);
    });

    it('should get the right concentration when adding and removing values', () => {
        let targetTest: IJar = <any>new Jar();
        targetTest.add(20, "Apple");
        targetTest.add(80, "Pear");
        targetTest.pourOut(10);
        expect(targetTest.getTotalAmount()).toEqual(90);
        expect(targetTest.getConcentration("Apple")).toEqual(20 * (1 - 10 / 100) / 90);
        expect(targetTest.getConcentration("Pear")).toEqual(80 * (1 - 10 / 100) / 90);
        (<any>targetTest).print();
    });

    it('should get the right concentration when adding and removing values 2nd try', () => {
        let targetTest: IJar = <any>new Jar();
        targetTest.add(200, "Apple");
        targetTest.add(200, "Banana");
        targetTest.pourOut(200);
        targetTest.add(200, "Apple");
        expect(targetTest.getTotalAmount()).toEqual(400);
        expect(targetTest.getConcentration("Apple")).toEqual(0.75);
        expect(targetTest.getConcentration("Banana")).toEqual(0.25);
        (<any>targetTest).print();
    });

});