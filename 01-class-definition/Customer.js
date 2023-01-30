var Customer = /** @class */ (function () {
    //define a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// create a new instance
var myCustomer = new Customer("Martin", "Dixon");
// myCustomer.firstName="Eric";
// myCustomer.lastName = "Lee";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
