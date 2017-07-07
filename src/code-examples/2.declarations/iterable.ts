
// o   For.. of..o

export function iterable() {
    let myArray = ["Apple", "Banana", "Strawberry", "Kiwi"];
    myArray.forEach(element => {
        console.log(element);
        // Apple Banana Strawberry Kiwi
    });

    for (let element of myArray) {
        console.log(element);
        // Apple Banana Strawberry Kiwi
    }

}
