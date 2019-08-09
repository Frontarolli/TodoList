import React, { Component } from 'react';
import './App.css';
import GoalItem from './components/GoalItem';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      goals: [
        {id: '123', goal: "Visit New York", startDate:"date", endDate:"date"},
        {id: '234', goal: "Buy a House", startDate:"date", endDate:"date"},
        {id: '345', goal: "Study Economics", startDate:"date", endDate:"date"}
      ]
    }
  }

  render(){
    return (
      <div>
        <div className="container-fluid center header">
          <h3>Goals List</h3>
        </div>
        <div className="container">
  
          <div className="row add-goal">
    
            <div className="col-md-3">
              <div className="row">
                <h6>Goal</h6>
              </div>
              <div className="row">
                <input type="text"></input>
              </div>
            </div>
  
            <div className="col-md-3">
              <div className="row">
                <h6>Start Date</h6>
              </div>
              <div className="row">
                <input type="date"></input>
              </div>
            </div>
  
            <div className="col-md-3">
              <div className="row">
                <h6>End Date</h6>
              </div>
              <div className="row">
                <input type="date"></input>
              </div>
            </div>
  
            <div className="col-md-3">
                <button className="add">Add</button>
                <button className="clear">Clear</button>
            </div>
  
          </div>
  
          <div className="content">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Goal</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                </tr>
              </thead>
              <tbody>                
                {
                  this.state.goals.map( goal => {
                    return <GoalItem key={goal.id} goal={goal.goal} startDate={goal.startDate} endDate={goal.endDate} />
                  })
                }
              </tbody>
            </table>
          </div>
        
        </div>
      </div>
    );
  }
}


export default App;
