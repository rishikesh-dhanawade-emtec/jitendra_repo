// 1. Complete the following MyArray class in TypeScript that can handle string and number only to get
// the expected results.


class MyArray{
    collection:any[] = [];
    add(value:string|number) {
    this.collection.push(value)
    }
    remove(value:string|number){
           const index=this.collection.indexOf(value)
        return this.collection.splice(index,1);
    }
    getValues(){
    return this.collection;
    }
}
const stringAry = new MyArray()
 stringAry.add('aaa')
 stringAry.add('bbb')
 stringAry.add('ccc')
 stringAry.remove('bbb')
 console.log(stringAry.getValues())
 const numberAry = new MyArray()
 numberAry.add(1)
 numberAry.add(2)
 numberAry.add(3)
 numberAry.remove(2)
 console.log(numberAry.getValues())
 const booleanAry = new MyArray()

 //  Boolean wont work here
//  numberAry.add(true)
//  numberAry.add(false)