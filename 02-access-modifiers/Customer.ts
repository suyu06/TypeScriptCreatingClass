class Customer2{
    private _firstName: string;
    private _lastName: string;
    //define a constructor
    constructor(theFirst:string, theLast:string ){
        this._firstName=theFirst;
        this._lastName=theLast;
    }
    public get firstName() : string{
        return this._firstName;
    }
    public set firstName(value:string){
        this._firstName=value;
    }
    public get lastName() : string{
        return this._lastName;
    }
    public set lastName(value:string){
        this._lastName=value;
    }
}
// create a new instance
let myCustomer2 = new Customer2("Martin","Dixon");
// myCustomer.firstName="Eric";
// myCustomer.lastName = "Lee";
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);