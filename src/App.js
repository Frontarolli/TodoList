import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoValue } from './redux/actions/index';
import { removeTodoValue } from './redux/actions/index';
import uuid from "uuid";

import './App.css';
import GoalItem from './components/GoalItem';

class App extends Component{

  state = {
    todoValue: '',
    startDate: '',
    endDate: ''
  }
  inputChange = event => {
    this.setState({
      todoValue: event.target.value
    })
  }

  clearValues = () => {
    this.setState({
      todoValue: '',
      startDate: '',
      endDate: ''
    })
  }

  setStartDate = event => {
    this.setState({
      startDate: event.target.value
    })
  }

  setEndDate = event => {
    this.setState({
      endDate: event.target.value
    })
  }

  addTodo = () => {
    if( (!this.state.todoValue) || (!this.state.startDate) || (!this.state.endDate) ) {
      alert("Values cannot be empty.");
    } else{
      const newObj = this.props.goals.push({id: uuid(), goal: this.state.todoValue, startDate:this.state.startDate, endDate:this.state.endDate});
      addTodoValue(newObj);
      this.setState({
        todoValue: '',
        startDate: '',
        endDate: ''
      })
    }
  }

  removeTodo = (value) => {
    const newObj = this.props.goals.filter((g) => {
      return g.id !== value
    });
    removeTodoValue(newObj);
  }

  render(){
    const { goals } = this.props;

    return (
      <div>
        <div className="container-fluid center header">
          <h2>Goals List</h2>
          <h5>A dream whitout a plan is just a dream.</h5>
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
                value={this.state.todoValue}></input>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <h6>Start Date</h6>
              </div>
              <div className="row">
                <input 
                onChange={this.setStartDate}
                type="date"
                value={this.state.startDate}></input>
              </div>
            </div>
  
            <div className="col-md-3">
              <div className="row">
                <h6>End Date</h6>
              </div>
              <div className="row">
                <input 
                onChange={this.setEndDate}
                type="date"
                value={this.state.endDate}
                ></input>
              </div>
            </div>
  
            <div className="col-md-3">
                <button className="add" onClick={() => this.addTodo()}>Add</button>
                <button className="clear" onClick={() => this.clearValues()}>Clear</button>
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
                    return( 
                      <tr key={goal.id}>
                        <GoalItem key={goal.id} id={goal.id} goal={goal.goal} startDate={goal.startDate} endDate={goal.endDate} />
                        <td>
                          <button className="remove" onClick={(e) => {
                            this.removeTodo(goal.id);
                          }}>Remove</button>
                        </td>
                      </tr>
                    )
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
  bindActionCreators({addTodoValue, removeTodoValue}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
