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
        <div className="task-list-container">
            <h2 className="task-list-heading">Ads</h2>
            <ListGroup className="task-list">
                <div className="row">
                    {tasks.map(task => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={task.id}> {/* Apply Bootstrap grid classes */}
                            <div className="card"> {/* Apply custom CSS class */}
                                <div className="card-body">
                                    <h5 className="card-title">{task.title}</h5>
                                    <div className="task-buttons">
                                        <Button variant="danger" size="sm" className="ml-2 m-lg-2" onClick={() => handleDelete(task.id)}>Delete</Button>
                                        <Button variant="primary" size="sm" className="ml-2 m-lg-2" onClick={() => handleShowModal(task)}>Update</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ListGroup>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTask && <TaskUpdateForm task={selectedTask} closeModal={handleCloseModal} />}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TaskList;
