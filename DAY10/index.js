const name=require("fs")
name.writeFile('Name.txt',"My name is Sarthak",(err)=>{
    if(err)
        console.log("err")
    else
        console.log("File created")
})
name.appendFile('Name.txt',"Classmate -> Shivam",(err)=>{
    if(!err)
        console.log("Update")
    else
        console.log("error")
})
name.readFile('Name.txt',utf8,(err)=>{
    if(err){
        console.log()
    }
})