import React, { Component } from 'react';
import { Icon,Grid, Step } from 'semantic-ui-react';
import { currentWeek } from '../utils/dataServices';

class WeekInFocus extends Component {
	constructor(props){
        super(props);
        this.state = { 
			currWeek: undefined
        };
    }
componentDidMount() {
	var _this = this;      
	currentWeek().then(function(r){
		  _this.setState({
			currWeek: r.data
		  });
	  });
  }
  render(){
	const { currWeek } = this.state
	if(currWeek) {
		return (
			<div>
			<Grid className="weekinFocusSection">
				<Grid.Column width={8} className="currentWeek">
					<div className="weekPartition">
					<h1 className="weekTitle">Current Week</h1>
					<div className="point">
					{this.state.currWeek.map(item => (
						<div className= "pointSection" key={item.id}>
						<Step.Content>
						<Step.Title><h2><li><span className="authorName">{item.title}</span><span className="endTime">5.50 am</span></li></h2></Step.Title>
						<Step.Description><p className="subjectDesc">{item.subject}</p></Step.Description>
					</Step.Content>
						<p className="detailedDesc">{item.dayOne}</p>
					</div>
						
					))}
				</div>
					{/* <div className="point">
					<Step.Content>
						<Step.Title><h2><li><span className="authorName">Fanny Stephens</span></li></h2></Step.Title>
						<Step.Description><p className="subjectDesc">New App Design Project</p></Step.Description>
					</Step.Content>
						<p className="detailedDesc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
					</div> */}
					</div>
				</Grid.Column>
				
				<Grid.Column width={8} className="previousWeek">
					<div className="weekPartition">
					<h1 className="weekTitle">Previous Week</h1>
					</div>
				</Grid.Column>
			</Grid>
			</div>
	);
	}else {
		return ( 
		  <h2>
			Loading...
		  </h2>
		)
	  }
}
}

export default WeekInFocus;



