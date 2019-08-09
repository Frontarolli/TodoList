import React, { Component } from 'react';


class GoalItem extends Component {    
    render(){
        return(
            <>
                <tr>
                    <th>{this.props.goal}</th>
                    <td>{this.props.startDate}</td>
                    <td>{this.props.endDate}</td>
                </tr>
            </>
        );
    }
}

export default GoalItem;
