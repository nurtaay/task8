import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import TaskUpdateForm from './TaskUpdateForm';
import { deleteTask } from './store';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [selectedTask, setSelectedTask] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleDelete = id => {
        dispatch(deleteTask(id));
    };

    const handleShowModal = task => {
        setSelectedTask(task);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedTask(null);
        setShowModal(false);
    };

    return (
        <div>
            <h2>Tasks</h2>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item key={task.id}>
                        {task.title}
                        <Button variant="danger" size="sm" className="ml-2" onClick={() => handleDelete(task.id)}>Delete</Button>
                        <Button variant="primary" size="sm" className="ml-2" onClick={() => handleShowModal(task)}>Update</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTask && <TaskUpdateForm task={selectedTask} closeModal={handleCloseModal} />}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TaskList;
