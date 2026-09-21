// class student{
//     constructor(){
//         console.log("Hello , how are you")
//     }
// }
// class Sarthak extends student{
//     constructor(){
//         super()
//         console.log("Hi")
//     }
//     static name=['Sarthak']
// }
// console.log(Sarthak.name)
// let obj=new Sarthak()
// class Employee{
//     name="";id=0;basic=0;
//     constructor(name,id,basic) {
//         this.name=name;
//         this.id=id;
//         this.basic=basic;
//     }
//     calculate(){
//         return this.basic
//     }
// }
// class Manger extends Employee{
//     add=0
//     constructor(update,name,id,bsd)
//     {
//         super(name,id,bsd)
//         this.add=update
//     }
//     calculate(){
//         return this.basic+this.add
//     }
// }
// let obj1=new Manger(123,"Sarthak",12,9000)
// console.log("Update Salary",obj1.calculate())
class Employee{
    name="";id=0;basic=0;
    constructor(name,id,basic) {
        this.name=name;
        this.id=id;
        this.basic=basic;
    }
    calculate(){
        return this.basic
    }
}
class Manger extends Employee{
    add=0
    constructor(update,name,id,bsd)
    {
        super(name,id,bsd)
        this.add=update
    }
    calculate(){
        return this.basic+this.add
    }
}
let obj=new Manger(123,"Sarthak",12,9000)
console.log("Update Salary",obj.calculate())

function name(show)
{
    console.log("Hello")
    setTimeout(()=>{console.log("Sarthak")},3000)
    show()
}
name(()=>{
    console.log("Shivam")
})