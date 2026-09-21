class student{
    constructor(){
        console.log("Hello")
    }
}
class Sarthak extends student{
    constructor(){
        super()
        console.log("Hi")
    }
    static name=['Sarthak']
}
console.log(Sarthak.name)
let obj=new Sarthak()