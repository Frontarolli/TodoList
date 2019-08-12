import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './redux/actions/index';

import './App.css';
import GoalItem from './components/GoalItem';

class App extends Component{

  state = {
    todoValue: ''
  }
  inputChange = event => {
    this.setState({
      todoValue: event.target.value
    })
  }

  render(){

    const { goals, clickButton } = this.props;

    return (
      <div>
        <div className="container-fluid center header">
          <h3>Goals List</h3>
          <p className="description">A Simple application using React and React Redux</p>
        </div>
        <div className="container">
  
          <div className="row add-goal">
    
            <div className="col-md-3">
              <div className="row">
                <h6>Goal</h6>
              </div>
              <div className="row">
                <input 
                onChange={this.inputChange}
                type="text"
                value={this.todoValue}></input>
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
                <button className="add" onClick={() => clickButton(this.state.todoValue)}>Add</button>
                <button className="clear">Clear</button>
            </div>{console.log(this.props)}
  
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
                  goals.map( goal => {
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

const mapStateToProps = store => ({
  goals: store.ToDo.goals
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({clickButton}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
