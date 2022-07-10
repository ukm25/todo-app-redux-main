// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 4, name: 'Learn Football', completed: false, priority: 'Medium'},
// }

// action creators => function

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text,
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status,
    }
}