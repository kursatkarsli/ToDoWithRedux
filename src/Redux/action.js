import types from './types';

export const addTodo = (item) => (
    {
    type: types.ADD_TODO,
    payload:item,
})

export const removeTodo = (id) => ({
    type: types.REMOVE_TODO,
    payload:id
})

