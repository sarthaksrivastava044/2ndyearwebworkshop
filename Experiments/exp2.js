let file = require("fs")
file.writeFile('file.txt', 'Password-2245', (err) => {
    if (!err)
        console.log("File Created")
    else
        console.log("Error")
})
file.appendFile('file.txt', "Password-5678", (err) => {
    if (err)
        console.log("Append Error")
    else
        console.log(" Update Date")
})
file.readFile('file.txt', 'utf8', (err, data) => {
    if (err)
        console.log("Reading File Error")
    else
        console.log("Save File entry data",data)
})
setTimeout(() => {
    file.unlink('file.txt', (err) => {
        if (err)
            console.log("Error")
        else
            console.log("Delete the File")
    })
}, 5000)