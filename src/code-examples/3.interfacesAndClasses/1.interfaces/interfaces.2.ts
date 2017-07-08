import { LabelledValue } from "./reference/labelled-value";

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

// only the Shape matters!
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// ERROR: Interface is only a type! 
// if (myObj instanceof LabelledValue){
//     // sth
// }