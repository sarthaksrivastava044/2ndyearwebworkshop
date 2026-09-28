let event = require("events") // return class so create the obj
let ss = new event()
ss.on("greet", () => {
    console.log("Good Morning Sarthak Srivastava")
})
ss.emit("greet")
ss.on("exit", () => {
    console.log("ThankYou For Visiting ")
})
ss.emit("exit")
console.log("Exiting !")
class Node extends event {
    constructor() {
        super()
    }
    show = () => {
        this.emit("greet")
    }
}
let object = new Node()
object.on("greet", () => { console.log("Discipline Beats Motivation") })
object.show()
console.log("Set Time Out, Set Immediate & Next Tick")
setTimeout(() => {
    console.log("Better Than Yesterday")
}, 4000)
setImmediate(() => {
    console.log("Backend ")
})
process.nextTick(() => {
    console.log("Hii!")
})
process.nextTick(() => {
    console.log("I am Sarthak")
})













































































