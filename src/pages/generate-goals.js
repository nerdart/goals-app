import React from 'react';
import TodoApp from './todo';
const stylesGoalsGen ={
	addNote : {
		height: '7rem',
		width: '50rem',
		paddingLeft: '1rem',
	
		fontSize:'1.3em'
	},
	title:{
		fontSize:'1.4em',
		marginBottom: '2rem'
	},
	noteSection: {
		textAlign: 'left',
		marginTop: '8rem'
	},
	addButton:{
		backgroundColor: '#2A60E4',
		color: '#fff',
		textShadow: 'none',
		width: '10rem',
		backgroundImage: 'none',
		height: '3rem',
		float: 'right',
		marginRight: '48rem',
		marginTop: '2rem',
		fontSize: '1.2em'
	}
}
const GenerateGoals = () => {
	return (
		<div>
		
		{/* <div style={stylesGoalsGen.noteSection}>
		<div style={stylesGoalsGen.title}>Overarching Goals <span><Icon name='angle down' /></span></div>
		<div><input type="text" style={stylesGoalsGen.addNote} placeholder="Click here to add a goal ..." /></div>
		<div><Button secondary style={stylesGoalsGen.addButton}>Add a Goal</Button></div> 
		
		</div>*/}
		<TodoApp/>
	
		
		</div>
	  )
}
export default GenerateGoals
