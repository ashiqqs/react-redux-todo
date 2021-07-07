import './App.css';
// import { AddTodo } from './components/add-todo';
import AddTodo from './components/todo/add';
import { ListTodo } from './components/list-todo';
import Navbar from './components/navbar';
import List from './components/todo/list';
import Filter from './components/todo/filter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="row mx-0">
        <div className="col-md-6 mx-auto">
            <AddTodo/>
            <Filter/>
            {/* <ListTodo/> */}
            <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
