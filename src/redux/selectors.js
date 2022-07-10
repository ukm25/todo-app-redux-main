import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//     const searchText = searchTextSelector(state);
//     const todosRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(searchText);
//     })
//     return todosRemaining;
// }

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  (todoList, status, searchText) => {
    // status => 'All' 'Completed' 'To do'
    return todoList.filter((todo) => {
        if(status === 'All') {
            return todo.name.includes(searchText);
        }
        return (
            todo.name.includes(searchText) &&
            (status === "Completed" ? todo.completed : !todo.completed)
        );
    });
  }
);
