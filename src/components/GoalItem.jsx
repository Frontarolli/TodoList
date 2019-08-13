import React, { Component, Fragment } from 'react';

class GoalItem extends Component {
    render(){
        return(
            <Fragment>
                <th>{this.props.goal}</th>
                <td>{this.props.startDate}</td>
                <td>{this.props.endDate}</td>
            </Fragment>
        );
    }
}

export default GoalItem;
