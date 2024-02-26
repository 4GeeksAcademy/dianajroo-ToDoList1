import React, { useState } from "react";




//create your first component
const Home = () => {
	let [inputValue, setInputValue] = useState("");
	let [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>todos</h1>
	<ul>
		<li> <input type="text" placeholder="Que necesitas hacer?"></input></li>
		<li>bañarme </li>
		<li>dormir</li>
		<li>correr</li>
		<li>tejer</li>
	</ul>
	<div>23 task</div>
		</div>
	);
};

export default Home;
