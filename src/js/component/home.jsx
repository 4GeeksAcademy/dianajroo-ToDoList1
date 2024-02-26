import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li> <input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setTodos(todos.concat(inputValue));
							setInputValue("")
						}
					}}
					placeholder="Que necesitas hacer?"></input>

				</li>
				{todos.map((text, index) => (
					<li style={{ display: "flex", justifyContent: "space-between" }}> 
					{text} <FontAwesomeIcon icon={faXmark} onClick={() => setTodos(todos.filter((t, flujoIndex) => index != flujoIndex))} />
					</li>
				))}
			</ul>
			<div className="footer">{todos.length} items left</div>
		</div>
	);
};

export default Home;
