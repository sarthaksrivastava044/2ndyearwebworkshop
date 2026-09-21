// class num{
//     public
//     name=""
//     constructor(val){
//        this.name=val
//     }
//     show=()=>{
//         console.log("My name is",this.name)
//     }
// }
// let obj=new num("Sarthak")
// obj.show()
// class secA{
//     name=""
//     roll_no=0
//     add=""
//     M_no=0
//     constructor(n,r,a,n){
//         this.name=n
//         this.roll_no=r
//         this.add=a
//         this.M_no=m
//     }
//     show=()=>{
//         console.log(this.name,this.roll_no,this.add,this.M_no)
//     }
// }

    
// }
// let obj2=new secA("Tanishque",59,"L-374 Sec-23",9310300737)
// obj.show()
// class num {
//     name = "";

//     constructor(val) {
//         this.name = val;
//     }

//     show = () => {
//         console.log("My name is", this.name);
//     };
// }

// let obj = new num("Sarthak");
// obj.show();

// class secA {
//     name = "";
//     roll_no = 0;
//     add = "";
//     M_no = 0;

//     constructor(n, r, a, m) { 
//         this.name = n;
//         this.roll_no = r;
//         this.add = a;
//         this.M_no = m;
//     }

//     show = () => {
//         console.log(this.name, this.roll_no, this.add, this.M_no);
//     };
// }

// let secObj = new secA("Tanishque", 59, "L-374 Sec-23", 9310300737);
// secObj.show();
// class Sarthak{
//     static count=0
//     constructor(){
//        Sarthak.count=Sarthak.count+1
//     }
//     show=()=>{
//         console.log(Sarthak.count)
//     }
// }
// let obj=new Sarthak()
// let obj2=new Sarthak()
// obj.show()
// class student{
//     static func=()=>{
//         console.log("Hello")
//     }
//     func2=()=>{
//         console.log("Hi")
//     }
// }
// let obj= new student()
// student.func()
// obj.func2()
// class university{
//     roll=0;name="";mark=0;
//     constructor(roll,name,mark){
//         this.roll=roll
//         this.name=name
//         this.mark=mark
//     }
//     displayResult=()=>{
//         console.log(`student ${this.name}`)
//         console.log(`Roll no ${this.roll}`)
//         if(this.mark>60)
//             console.log("Pass")
//         else
//             console.log("Fail")
//     }
//     show=()=>{
//         console.log(`Students are ${university.count}`)
//     }
// }
// let obj1= new university(25,"Sarthak")
// obj1.displayResult()
// let obj2=new university(65,"Rohit")
// obj2.displayResult()

class Bank{
    acc=0
    hol=""
    static balance=0
    constructor(ac,ho,bala)
    {
        this.acc+=ac
        this.hol=ho
        Bank.balance+=bala


    }
    withdraw(amt)
    {
        if(Bank.balance>amt)
        Bank.balance-=amt
        else
        console.log('Insufficient')
    }
}

