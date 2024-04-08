import { createStore } from 'redux';
import reducer, { addTask, deleteTask, updateTask } from '../crud/store';

describe('Redux Store', () => {
    let store;

    beforeEach(() => {
        store = createStore(reducer);
    });

    it('should add a task to the state', () => {
        const task = { id: 1, name: 'Test Task' };
        store.dispatch(addTask(task));
        expect(store.getState().tasks).toContainEqual(task);
    });

    it('should delete a task from the state', () => {
        const task = { id: 1, name: 'Test Task' };
        store.dispatch(addTask(task));
        store.dispatch(deleteTask(1));
        expect(store.getState().tasks).not.toContainEqual(task);
    });

    it('should update a task in the state', () => {
        const task = { id: 1, name: 'Test Task' };
        store.dispatch(addTask(task));
        const updatedTask = { id: 1, name: 'Updated Task' };
        store.dispatch(updateTask(updatedTask));
        expect(store.getState().tasks).toContainEqual(updatedTask);
    });
});
