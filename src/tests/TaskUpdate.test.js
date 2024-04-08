import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TaskUpdateForm from '../crud/TaskUpdateForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => mockDispatch,
}));

describe('TaskUpdateForm Component', () => {
    let component;
    let closeModalMock;

    beforeEach(() => {
        closeModalMock = jest.fn();
        // eslint-disable-next-line testing-library/no-render-in-setup
        component = render(
            <TaskUpdateForm task={{ id: 1, title: 'Task 1' }} closeModal={closeModalMock} />
        );
    });

    it('should render task update form correctly', () => {
        const { getByPlaceholderText, getByText } = component;
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByPlaceholderText('Task title')).toBeInTheDocument();
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText('Update')).toBeInTheDocument();
    });

    it('should update task title and call closeModal on form submit', () => {
        const { getByText, getByPlaceholderText } = component;
        const newTitle = 'Updated Task';
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.change(getByPlaceholderText('Task title'), { target: { value: newTitle } });
        // eslint-disable-next-line testing-library/prefer-screen-queries
        fireEvent.click(getByText('Update'));
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TASK', payload: { id: 1, title: newTitle } });
        expect(closeModalMock).toHaveBeenCalledTimes(1);
    });
});
