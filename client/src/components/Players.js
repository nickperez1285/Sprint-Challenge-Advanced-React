import React from 'react'; 
import axios from 'axios';



export default class Players extends React.Component {
   state = {
    players: []
  }

 componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data);
      this.setState({
        players: res.data
      })
    }) 
    .catch(error => {
      console.log( error);
      
    })
  }



render(){
return(
	<div> 
	
	{this.state.players.map(pl=>
		<div className="player-attrs">Name: {pl.name}<br/>
		Country : {pl.country}<br/>
		Searches : {pl.searches}<br/>
		ID : {pl.id}<hr/></div>

		)}

	</div> 
	)
}


}




