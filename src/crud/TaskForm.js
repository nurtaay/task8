import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addTask } from './store';
import '../App.css';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTask({ title }));
        setTitle('');
    };

    return (
        <div className="task-form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} className="form-control task-input" />
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-primary submit-button">Add</Button>
            </Form>
        </div>

    );
};

export default TaskForm;
