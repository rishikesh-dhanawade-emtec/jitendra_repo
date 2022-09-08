// 4. Write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking
// Bank Account
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount
// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds
var Bank_Acc = /** @class */ (function () {
    function Bank_Acc(id, firstName, lastName, address, phone, email, type) {
        this.collection = [];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    Bank_Acc.prototype.createAccount = function (id, firstName, lastName, address, phone, email, type) {
        this.collection.push(id, firstName, lastName, address, phone, email, type);
    };
    Bank_Acc.prototype.updateAccount = function (id) {
        var index = this.collection.indexOf(id);
        this.collection.splice(index, 1, 10);
    };
    Bank_Acc.prototype.deleteAccount = function (id) {
        var index = this.collection.indexOf(id);
        this.collection.splice(index, 1);
    };
    return Bank_Acc;
}());
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.date = ' ';
        _this.trans_type = true; // True Means success and False means failed
        _this.amount = 0;
        _this.customerId = _this.id;
        _this.moni = [];
        return _this;
    }
    Transaction.prototype.depositFunds = function (firstName, date, trans_type, amount, customerId) {
        this.moni.push(firstName, date, trans_type, amount, customerId);
    };
    Transaction.prototype.withdrawFunds = function (amount) {
        var index = this.moni.indexOf(amount);
        this.moni.splice(index);
    };
    return Transaction;
}(Bank_Acc));
var b1 = new Bank_Acc(1, 'Jitendra', 'Patil', 'Erandol', 7755971235, 'jitendra.p@emtecinc.com', 'Savings');
console.log(b1);
var d1 = new Transaction(1, 'jitendra', 'Patil', 'Shirpur', 8788720924, 'jitendra.p@emtecinc.com', 'Savings');
console.log(d1);
d1.depositFunds('jitendra', '20/11/2022', true, 9000000, 1);
console.log(d1.moni);
d1.withdrawFunds(9000000);
console.log(d1.moni);
