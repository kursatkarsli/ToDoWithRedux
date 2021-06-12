import React from 'react'
import types from './types';

const INITIAL_STATE = {
    
    todoList:[]
};


 function Reducer(state=INITIAL_STATE,action) {
 
     switch (action.type) {
         case types.ADD_TODO:
             return {...state,todoList:[...state.todoList,action.payload]}
         case types.REMOVE_TODO:
             console.log(state.todoList.filter((item, i) => i !== action.payload));
             return {...state,todoList:state.todoList.filter((item,i)=>i !== action.payload)}
         default:
             return state
     }
     console.log(state);
     
}

export default Reducer;
