import { createStore } from 'redux';

let i = 0;
let todo =[], completed = [], deleted = [];

export const dotoList = (state = {todo: [], completed: [], deleted: []}, action) => {
    switch( action.type ) {
        case 'Todo':
            let data = {
                id: i++,
                actions: action.data
            };
            todo.push(data);
            return {todo, completed, deleted};
        case 'Completed':
            todo.map((data, index) => {
                if(data.id === action.data.id) {
                    todo.splice(index, 1);
                    completed.push(data);
                }
            });
            return {todo, completed, deleted};
        case 'deleted':
            todo.map((data, index) => {
            if(data.id === action.data.id) {
                todo.splice(index, 1);
                // deleted.push(data)
            }
        });
        completed.map((data, index) => {
            if(data.id === action.data.id) {
                completed.splice(index, 1);
                // deleted.push(data)
            }
        });
        return {todo, completed, deleted};
        case 'UndoDeleted':
        deleted.map((data, index) => {
            if(data.id === action.data.id) {
                deleted.splice(index, 1);
                todo.push(data)
            }
        });
        return {todo, completed, deleted};
        default:
            return state;
    }
}

let store = createStore(dotoList);

export default store;