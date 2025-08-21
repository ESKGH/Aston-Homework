import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostList, { type Post } from '../../widgets/PostList/PostList';
import styles from './UserPostsPage.module.css';

const UserPostsPage: React.FC = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <h2>Посты пользователя {id}</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default UserPostsPage;
