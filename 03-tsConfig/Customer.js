"use strict";
var Customer3 = /** @class */ (function () {
    //define a constructor
    function Customer3(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
// create a new instance
var myCustomer3 = new Customer3("Martin", "Dixon");
// myCustomer.firstName="Eric3";
// myCustomer.lastName = "Lee3";
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
