import React from 'react';
import TaskList from './crud/TaskList';
import TaskForm from './crud/TaskForm';
import { Container } from 'react-bootstrap';


function App() {
    return (
        <Container>
            <h1>Ads Board</h1>
            <TaskForm />
            <TaskList />
        </Container>
    );
}

export default App;
