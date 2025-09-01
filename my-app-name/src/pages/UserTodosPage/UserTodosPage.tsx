import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../../widgets/UserTabs/UserTabs';
import { todosApi } from '../../entities/todo/api/todosApi';
import styles from './UserTodosPage.module.css';

const UserTodosPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { data: todos = [], isLoading } = todosApi.useGetUserTodosQuery(userId);

  if (!id) return <p className={styles.message}>Некорректный пользователь</p>;
  if (isLoading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <UserTabs userId={userId} />
      <h2>Задачи пользователя {id}</h2>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.item}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodosPage;
