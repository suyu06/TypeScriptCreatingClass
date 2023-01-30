class Customer4{
   
    //using parameter properties to define the class and its constructor
    constructor(private _firstName:string, private _lastName:string ){
       
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
let myCustomer4 = new Customer4("Eric e","Lee");

console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName);