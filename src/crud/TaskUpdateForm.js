import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateTask } from '../crud/store';

const TaskUpdateForm = ({ task, closeModal }) => {
    const [title, setTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTask({ ...task, title }));
        closeModal();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Update Task</Button>
        </Form>
    );
};

export default TaskUpdateForm;
