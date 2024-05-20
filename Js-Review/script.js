// Note Use Quokka.js Extensions
// 30.Asynchronous Javascriprt:Promises
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res)=>res.json())
  .then((data)=>console.log(data))
  
