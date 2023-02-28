var Customer = /** @class */ (function () {
    function Customer(theFName, theLName) {
        this.FName = theFName;
        this.LName = theLName;
    }
    return Customer;
}());
var myCustomer = new Customer("Almaz", "Dechasa");
console.log(myCustomer.FName);
console.log(myCustomer.LName);
