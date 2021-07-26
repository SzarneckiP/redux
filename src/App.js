import './styles.css';
import TodoList from './Containers/TodoList';
import AddTodo from './Containers/AddTodo';
import Footer from './Containers/Footer';

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>Edit to see some magic happen!</h2>

      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
