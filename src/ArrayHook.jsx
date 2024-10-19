import { useState } from 'react';

const useArray = (initialArray = []) => {
  const [array, setArray] = useState(initialArray);
  const [nextId, setNextId] = useState(1);


  const add = (item) => {
    const newItem = { ...item, id: nextId };
    setArray([...array, newItem]);
    setNextId(nextId + 1);
  };


  const removeById = (id) => {
    setArray(array.filter((item) => item.id !== id));
  };


  const clear = () => {
    setArray([]);
    setNextId(1);
  };

  return [array, { add, removeById, clear }];
};


const ArrayComponent = () => {
  const [todos, todoActions] = useArray([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      todoActions.add({ title: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="array-component">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Agregar tarea..."
      />
      <button onClick={handleAdd}>Agregar</button>
      <button onClick={todoActions.clear}>Limpiar lista</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <button onClick={() => todoActions.removeById(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayComponent;