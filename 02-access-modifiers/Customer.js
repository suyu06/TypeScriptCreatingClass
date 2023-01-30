var Customer2 = /** @class */ (function () {
    //define a constructor
    function Customer2(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
// create a new instance
var myCustomer2 = new Customer2("Martin", "Dixon");
// myCustomer.firstName="Eric";
// myCustomer.lastName = "Lee";
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
