import { createStore } from 'redux';


const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK'; // Добавляем новый тип действия

export const addTask = task => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: id,
});

export const updateTask = task => ({
    type: UPDATE_TASK,
    payload: task,
});

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = { id: Date.now(), ...action.payload };
            const updatedTasks = [...state.tasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {
                ...state,
                tasks: updatedTasks,
            };
        case DELETE_TASK:
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(filteredTasks));
            return {
                ...state,
                tasks: filteredTasks,
            };
        case UPDATE_TASK: // Добавляем обработку действия UPDATE_TASK
            const updatedTasksList = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, ...action.payload };
                }
                return task;
            });
            localStorage.setItem('tasks', JSON.stringify(updatedTasksList));
            return {
                ...state,
                tasks: updatedTasksList,
            };
        default:
            return state;
    }
};
const store = createStore(reducer);

export default store;
