import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addTask } from './store';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTask({ title }));
        setTitle('');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Add Task</Button>
            </Form>
        </div>
    );
};

export default TaskForm;
