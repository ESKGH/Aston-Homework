import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './UserTodosPage.module.css';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const UserTodosPage: React.FC = () => {
  const { id } = useParams();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <h2>Список дел пользователя {id}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? styles.done : ''}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodosPage;