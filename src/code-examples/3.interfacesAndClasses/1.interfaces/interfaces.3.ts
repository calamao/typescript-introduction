import { Shape } from "./reference/shape";

export function printLabel(shapeObj: Shape) {
    console.log(shapeObj.color);
    console.log(shapeObj.x);
}

// only the Shape matters!
let shapeObj: Shape = {x: 10, y: 20};

// ERROR is readonly
// shapeObj.x = 4;

// ERROR: no 'y' (color is optional)
// let shapeObj = {x: 10}; 

printLabel(shapeObj);
