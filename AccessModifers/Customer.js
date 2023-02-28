"use strict";
class Customer {
    constructor(theFName, theLName) {
        this._FName = theFName;
        this._LName = theLName;
    }
    get firstName() {
        return this._FName;
    }
    set firstName(value) {
        this._FName = value;
    }
    get lastName() {
        return this._LName;
    }
    set lastName(value) {
        this._LName = value;
    }
}
let myCustomer = new Customer("Almaz", "Dechasa");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.lastName = "Eidea";
