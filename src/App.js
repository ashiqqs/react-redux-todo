import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/add-todo';
import { ListTodo } from './components/list-todo';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="row">
        <div className="col-md-6 mx-auto">
            <AddTodo/>
            <ListTodo/>
        </div>
      </div>
    </div>
  );
}

export default App;
