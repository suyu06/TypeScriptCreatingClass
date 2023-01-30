"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shapes initially empty
var theshapes = [];
// add the shapes to the array;
theshapes.push(myShape);
theshapes.push(myCircle);
theshapes.push(myRectangle);
for (var _i = 0, theshapes_1 = theshapes; _i < theshapes_1.length; _i++) {
    var tempShape = theshapes_1[_i];
    console.log(tempShape.getInfo());
}
