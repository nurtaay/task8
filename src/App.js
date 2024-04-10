import React from 'react';
import TaskList from './crud/TaskList';
import TaskForm from './crud/TaskForm';
import { Container } from 'react-bootstrap';
import AppNavbar from './crud/Nav';


function App() {
    return (
        <Container>
            <AppNavbar />
            <TaskForm />
            <TaskList />
        </Container>
    );
}

export default App;
