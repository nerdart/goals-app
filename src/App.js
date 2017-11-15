import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import GenerateGoals from './pages/generate-goals';
import WeekInFocus from './pages/week-in-focus';
import ThingsToDoInFuture from './pages/things-in-future';
import Lists from './pages/lists';
import GratitudeLog from './pages/gratitude-log';
import MenuExampleSubMenu from './layout/menu';
import Navbar from './layout/navbar';
import DragAndDrop from './utils/draganddrop';
import QuoteApp from './stories/src/multiple-vertical/quote-app';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
    <Router>
     <div className="App">
     <Navbar/>
        <Grid columns='equal'>
            <Grid.Column width={3}>
            
              <MenuExampleSubMenu/>
              
              </Grid.Column>
            <Grid.Column width={13}>
              <Route exact path="/generate-goals" component={GenerateGoals}/>
              <Route exact path="/weekinfocus" component={WeekInFocus}/>
              <Route exact path="/log" component={GratitudeLog}/>
              <Route exact path="/thingsinfuture" component={ThingsToDoInFuture}/>
              <Route exact path="/lists" component={Lists}/>
              <Route exact path="/draganddrop" component={DragAndDrop}/>
              <Route exact path="/quote" component={QuoteApp}/>
            </Grid.Column>
        </Grid>
              
              
      </div>
    </Router>
    );
  }
}

export default App;
