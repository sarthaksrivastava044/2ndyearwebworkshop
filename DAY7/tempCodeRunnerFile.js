class university{
    roll=0;name="";mark=0;
    constructor(roll,name,mark){
        this.roll=roll
        this.name=name
        this.mark=mark
    }
    displayResult=()=>{
        console.log(`student ${this.na}`)
        console.log(`Roll no ${this.rol}`)
        if(this.mark>60)
            console.log("Pass")
        else
            console.log("Fail")
    }
    show=()=>{
        console.log(`Students are ${university.count}`)
    }
}
let obj1= new university(25,"Sarthak")
obj1.displayResult()
let obj2=new university(65,"Rohit")
obj2.displayResult()