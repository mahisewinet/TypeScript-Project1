class Customer{
    FName: string;
    LName: string;

    constructor(theFName:string,theLName:string){
        this.FName= theFName;
        this.LName= theLName;
    }
}

let myCustomer= new Customer("Almaz","Dechasa");

console.log(myCustomer.FName);
console.log(myCustomer.LName);
