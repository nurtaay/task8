import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskForm from '../crud/TaskForm';
import { addTask } from '../crud/store';

const mockStore = configureStore([]);

describe('TaskForm Component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({});
        // eslint-disable-next-line testing-library/no-render-in-setup
        component = render(
            <Provider store={store}>
                <TaskForm />
            </Provider>
        );
    });

    it('should render task form correctly', () => {
        const { getByPlaceholderText, getByText } = component;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByPlaceholderText('Task title')).toBeInTheDocument();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Add')).toBeInTheDocument();
    });

    it('should dispatch addTask action on form submit', () => {
        const { getByText, getByPlaceholderText } = component;
        const taskTitle = 'Test Task';
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.change(getByPlaceholderText('Task title'), { target: { value: taskTitle } });
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByText('Add'));
        const actions = store.getActions();
        expect(actions).toEqual([addTask({ title: taskTitle })]);
    });
});
