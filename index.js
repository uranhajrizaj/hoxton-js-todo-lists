
let newArray=[];
for (let i = 0; i < users.length; i++) {
   newArray.push([`Name: ${users[i].name}`, ` ID: ${users[i].id}`, ` Adress: ${users[i].address.city} \n `])
}
console.log(newArray)
let message=alert(newArray)

let yourid=Number(prompt("Enter your ID"))
for(let i=0;i<users.length;i++){    
    if(users[i].id==yourid){
        alert(`Name: ${users[i].name} \n Todos: ${todos[i].title} `)
         } 
}
