// Note Use Quokka.js Extensions
// 31.Asynchronous Javascriprt:Async/Await
// https://jsonplaceholder.typicode.com/todos
async function getData(){
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = res.json();
  return data;
}
const data =await getData();