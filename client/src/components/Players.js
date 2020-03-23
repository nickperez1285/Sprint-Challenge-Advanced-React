import React from 'react'; 
import { useState, useEffect } from "react";
import axios from 'axios'

const Players = () => {
	const [state, setState]= useState([])

	useEffect( ()=>{
		axios.get("http://localhost:5000/api/players")
		.then(res => setState(res.data))


	} , [])

	console.log(state)

return(
	<div> 
	<p> hello from players</p> 
	{state.map(pl=>
		<p>{pl.name}</p>

		)}

	</div> 
	)
}

export default Players 
