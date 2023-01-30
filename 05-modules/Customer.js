"use strict";
exports.__esModule = true;
exports.Customer5 = void 0;
var Customer5 = /** @class */ (function () {
    //using parameter properties to define the class and its constructor
    function Customer5(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer5.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer5.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer5;
}());
exports.Customer5 = Customer5;
