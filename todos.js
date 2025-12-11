import { displayTodos } from "./displayTodos.js";

export async function fetchTodos() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        displayTodos(data);
    } catch (err) {
        console.log("Error fetching todos:", err);
    }
}
