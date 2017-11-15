import React from 'react';
import { Grid, Button, Icon, Image } from 'semantic-ui-react';
import { render } from 'react-dom';
import axios from 'axios';

console.clear();
const stylesGoalsGen ={
	addNote : {
		height: '5rem',
		width: '50rem',
		paddingLeft: '1rem',
		
		fontSize:'1em'
	},
	title:{
		fontSize:'1.4em',
		marginBottom: '2rem'
	},
	noteSection: {
		textAlign: 'left',
		marginTop: '3rem'
	},
	addButton:{
		backgroundColor: '#2A60E4',
		color: '#fff',
		textShadow: 'none',
		width: '10rem',
		backgroundImage: 'none',
		height: '3rem',
		float:'right',
		marginTop: '2rem',
        fontSize: '1.2em',
        marginRight: '0px'
    },
    formSection :{
        float: 'left',
        marginLeft: '18rem'
    },
    commentStyle : {
        listStyleType: 'none',
        width: '50rem',
        border: '2px solid #ddd',
        marginLeft: '18rem',
       marginTop: '1rem',
        height: '5rem',
        padding: '10px',
        textAlign: 'center'
    }
    
    
}
const Title = ({todoCount}) => {
  return (
    <Grid>
    <Grid.Column width={16}>
    <div style={stylesGoalsGen.noteSection}>
		<div style={stylesGoalsGen.title}>Overarching Goals <span><Icon name='angle down' /></span></div>
    </div>
    </Grid.Column>
    </Grid>
  );
}

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <Grid>
    <Grid.Column width={16}>
      <div style={stylesGoalsGen.formSection}>
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      
      <input style={stylesGoalsGen.addNote} placeholder="Click here to add a goal ..." ref={node => {
        input = node;
      }} />
    
      <br />
      <div><Button secondary style={stylesGoalsGen.addButton}>Add a Goal</Button></div>
    </form>
    </div>
    </Grid.Column>
    </Grid>
  );
};

const Todo = ({todo, remove}) => {
  // Each Todo
  return (
      <Grid>
      <Grid.Column width={16}>
  <div style={stylesGoalsGen.todoListStyle}>
    <li className = "commentStyle" style={stylesGoalsGen.commentStyle}>
       <a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>
    </li>
  </div>
  </Grid.Column>
  </Grid>
);
}

const TodoList = ({todos, remove}) => {
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div>{todoNode}</div>);
}
window.id = 0;
class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = 'http://localhost:3000/todos/'
  }
 
  componentDidMount(){
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({data:res.data});
      });
  }
  addTodo(val){
    const todo = {text: val}
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }
  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});
      })
  }

  render(){
    return (
      <div>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}
export default TodoApp;