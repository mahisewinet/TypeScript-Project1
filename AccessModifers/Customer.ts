class Customer{
   private _FName: string;
   private _LName: string;

    constructor(theFName:string,theLName:string){
        this._FName= theFName;
        this._LName= theLName;
    }

    public get firstName(): string{
        return this._FName;
    }

    public set firstName(value: string){
        this._FName= value;
    }

    public get lastName(): string {
        return this._LName;
    }
    public set lastName(value: string) {
        this._LName = value;
    }
}

let myCustomer= new Customer("Almaz","Dechasa");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

myCustomer.lastName="Eidea";
