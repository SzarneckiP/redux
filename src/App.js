import './styles.css';
import TodoList from './Containers/TodoList';
import AddTodo from './Containers/AddTodo';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>

      <AddTodo />
      <TodoList />
    </div>
  );
}
