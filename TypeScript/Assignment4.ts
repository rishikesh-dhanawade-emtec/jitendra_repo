// 4. Write typescript code with following requirements (design proper classes). The requirements have
// suggestions for fields and methods, you are free to add more as per your thinking
// Bank Account

// fields: id, firstName, lastName, address, phone, email, type (saving/current)
// methods: createAccount, updateAccount, deleteAccount
// Transaction
// fields: date, type, amount, customerId
// methods: depositFunds, withdrawFunds

class Bank_Acc {
    id: number 
    firstName: string
    lastName: string
    address: string
    phone: number
    email: string
    type:string
    collection:any = []

    constructor(id: number ,firstName: string,lastName: string,address: string,phone: number,email: string,type:string) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.phone = phone
        this.email = email
        this.type = type
      }

    createAccount( id: number,firstName: string,lastName: string,address: string,phone: number,email: string,type:string){
        this.collection.push(id,firstName,lastName,address,phone,email,type)
    }

    updateAccount(id: number){
        let index = this.collection.indexOf(id)
        this.collection.splice(index,1,10)
    }

    deleteAccount(id: number){
        let index = this.collection.indexOf(id)
        this.collection.splice(index,1)
    }
}

class Transaction extends Bank_Acc{
    date: string = ' '
    trans_type: boolean = true // True Means success and False means failed
    amount: number = 0
    customerId: number = this.id
    moni:any = []

    depositFunds(firstName: string,date: string, trans_type: boolean,amount:number,customerId:number){
        this.moni.push(firstName,date,trans_type,amount,customerId)
    }
    
    withdrawFunds(amount:number){
        let index = this.moni.indexOf(amount)
        this.moni.splice(index)
    }

}

const b1 = new Bank_Acc(1,'Jitendra','Patil','Erandol',7755971235,'jitendra.p@emtecinc.com','Savings')
console.log(b1)

const d1 = new Transaction(1,'jitendra','Patil','Shirpur',8788720924,'jitendra.p@emtecinc.com','Savings')
console.log(d1)
d1.depositFunds('jitendra','20/11/2022',true,9000000,1)
console.log(d1.moni)
d1.withdrawFunds(9000000)
console.log(d1.moni)