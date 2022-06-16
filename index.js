
let newArray=[];
for (let i = 0; i < users.length; i++) {
   newArray.push([`Name: ${users[i].name}`, ` ID: ${users[i].id}`, ` Adress: ${users[i].address.city} \n `])
}
console.log(newArray)
let usersNameAndIdandAdress=alert(newArray)

// let yourid=Number(prompt("Enter your ID"))
// for(let i=0;i<users.length;i++){    
//     if(users[i].id==yourid){
//         alert(`Name: ${users[i].name} \n Todos: ${todos[i].title} `)
//          } 
// }
let yourid=Number(prompt("Enter your ID"))
let message=confirm("Do you want to see your todos?")
if(message==true){
for(let i=0;i<users.length;i++){    
    if(users[i].id==yourid){
        alert(`Name: ${users[i].name} \n Todos: ${todos[i].title} `)
         } 
} 
}
else {
   let message1= confirm(`Do you want to add a todo?`) 
 if(message1==true){
    let newTodo=String(prompt("Enter your new todo"))
    for(let i=0;i<users.length;i++){    
        if(users[i].id==yourid){
            console.log(todos[i].title)
    todos[i].title=newTodo 
   console.log(todos[i].title)
}
 }}
    else {
        alert("Goodbye")
    }

}
