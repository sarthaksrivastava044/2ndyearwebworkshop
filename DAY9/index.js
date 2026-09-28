// const eventEmitter=require('events')
//  const event=new eventEmitter()
//  event.on('sayMyName',()=>{
//     console.log("Remember the name Sarthak Srivastava")
//  })
//  event.emit('sayMyName')
//  event.on('exit', () => {
//     console.log("Thank You & love You");
// });
// event.emit('exit')
// class button{
//     constructor(){
//         this.eventEmitter=require('events')
//         this.event=new this.eventEmitter()
//     }
//     click(){
//         this.event.emit('click')
//     }
// }
// let btn=new button()
// btn.event.on('click',()=>{
//     console.log("Button Pressed")
// })
// btn.click()
console.log("Start")    
setTimeout(()=>{
    console.log("Hello")
},2000)
  
setImmediate(()=>{
    console.log("Hello")
})
process.nextTick(()=>{
    console.log("Hello")
})
console.log("End")
