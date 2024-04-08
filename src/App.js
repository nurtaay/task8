import React from 'react';
import TaskList from './crud/TaskList';
import TaskForm from './crud/TaskForm';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <Container>
            <h1>Ads Manager</h1>
            <TaskList />
            <TaskForm />
        </Container>
    );
}

export default App;
