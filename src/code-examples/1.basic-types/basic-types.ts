export class BasicTypes {

    testBasicTypes() {
        // any
        let notSure: any = 4;
        notSure = 'maybe a string instead';
        notSure = false; // okay, definitely a boolean

        // boolean
        let isDone: boolean = false;
        // let isDone = false; // type inferring

        // numeric
        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;

        // string
        let color: string = 'blue';
        let fullName: string = `Bob Bobbington`;
        let age: number = 37;
        let sentence: string = `Hello, my name is ${ fullName }.
            I'll be ${ age + 1 } years old next month.`;

        // array
        let list: number[] = [1, 2, 3];

        // enum
        enum Color {Red, Green, Blue};
        let c: Color = Color.Blue;
    }

}