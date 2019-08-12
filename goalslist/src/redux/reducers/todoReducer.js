import { ADD_TODO } from '../actions/actionTypes';

const initialState = {
    goals: [
      {id: '123', goal: "Visit New York", startDate:"date", endDate:"date"},
      {id: '234', goal: "Buy a House", startDate:"date", endDate:"date"},
      {id: '345', goal: "Study Economics", startDate:"date", endDate:"date"}
    ],
    newValue: ''
  };

  export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          newValue: action.newValue
        };
      default:
        return state;
    }
  };