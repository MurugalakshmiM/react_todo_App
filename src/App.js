import React from 'react';
import './App.css';
import TodoComponent from './components/TodoComponent';
import TodoList from './components/TodoList';
import CompletedList from './components/CompletedList'
import DeletedList from './components/DeletedList'

class App extends React.Component {
  render() {
  return (
    <div>
      <TodoComponent></TodoComponent>
      <TodoList></TodoList>
      <CompletedList></CompletedList>
      <DeletedList></DeletedList>
    </div>
  );
  }
}

export default App;
