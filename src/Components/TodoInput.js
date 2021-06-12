import React, { useState } from 'react'
import { connect } from 'react-redux';
import {addTodo} from '../Redux/action';



function AddTodo(props) {
    const [getItem, SetItem] = useState('');


    const handleChange = (e) => {
        SetItem(e.target.value);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(getItem)
        SetItem('')
    }
    
    return (
            <form onSubmit={handleSubmit}  >
            <input type='text' placeholder='enter todo' onChange={ handleChange} value={getItem} />
            <input type='submit' hidden/>
            </form>
    )
};
const mapDispatchToProps = (dispatch) => ({
    addTodo: item => {
        dispatch(addTodo(item))
    }
})


export default connect(null, mapDispatchToProps)(AddTodo)