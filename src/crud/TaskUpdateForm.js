import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateTask } from './store';

const TaskUpdateForm = ({ task, closeModal }) => {
    const [title, setTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateTask({ ...task, title }));
        closeModal();
    };

    return (
        <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary">Update</Button>
        </Form>

    );
};

export default TaskUpdateForm;
