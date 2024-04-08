import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskList from '../crud/TaskList';
import { deleteTask } from '../crud/store';

const mockStore = configureStore([]);

describe('TaskList Component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            tasks: [
                { id: 1, title: 'Task 1' },
                { id: 2, title: 'Task 2' },
                // Add more tasks if needed
            ],
        });
        // eslint-disable-next-line testing-library/no-render-in-setup
        component = render(
            <Provider store={store}>
                <TaskList />
            </Provider>
        );
    });

    it('should render task list correctly', () => {
        const { getByText } = component;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Task 1')).toBeInTheDocument();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Task 2')).toBeInTheDocument();
    });

    it('should dispatch deleteTask action on delete button click', () => {
        const { getByText } = component;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByText('Delete'));
        const actions = store.getActions();
        expect(actions).toEqual([deleteTask(1)]);
    });

});
