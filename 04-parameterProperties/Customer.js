"use strict";
var Customer4 = /** @class */ (function () {
    //using parameter properties to define the class and its constructor
    function Customer4(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer4.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer4.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer4;
}());
// create a new instance
var myCustomer4 = new Customer4("Eric e", "Lee");
console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName);
