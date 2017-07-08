
export class Animal {
    private name: string;

    // Property
    get Name(){
        return this.name;
    }
    set Name(value){
        this.name = value;
    }

    constructor(theName: string) { this.name = theName; }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {

    constructor(name: string) {
        // ERROR: super must be first statement.
        // this.move();
        super(name);
    }

    bite() {
        console.log("Bite!");
    }

    // overriding base class 'move'
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");  // REMARK: Horse is Animal

sam.move();
tom.move(34);


// OUTPUT
// Slithering...
// Sammy the Python moved 5m.
// Galloping...
// Tommy the Palomino moved 34m.