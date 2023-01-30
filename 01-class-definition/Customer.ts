class Customer{
    firstName: string;
    lastName: string;
    //define a constructor
    constructor(theFirst:string, theLast:string ){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}
// create a new instance
let myCustomer = new Customer("Martin","Dixon");
// myCustomer.firstName="Eric";
// myCustomer.lastName = "Lee";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);