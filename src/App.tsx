import { useState } from 'react';
import { Todos } from './components/Todos';
import { type TodoId } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'Todo 1',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
