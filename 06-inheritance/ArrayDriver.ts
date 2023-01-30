import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(10, 15);

let myCircle = new Circle(5, 10, 20);

let myRectangle = new Rectangle(0, 0, 3, 7);
// declare an array of shapes initially empty
let theshapes: Shape[] = [];
// add the shapes to the array;
theshapes.push(myShape);
theshapes.push(myCircle);
theshapes.push(myRectangle);

for (let tempShape of theshapes) {
  console.log(tempShape.getInfo());
}
