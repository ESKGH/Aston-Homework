import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './PostDetailPage.module.css';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className={styles.message}>Загрузка...</p>;
  if (!post) return <p className={styles.message}>Пост не найден</p>;

  return (
    <div className={styles.page}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className={styles.links}>
        <Link to={`/users/${post.userId}/posts`}>Другие посты автора</Link>
        <Link to={`/users/${post.userId}/albums`}>Альбомы автора</Link>
        <Link to={`/users/${post.userId}/todos`}>Список дел автора</Link>
      </div>
    </div>
  );
};

export default PostDetailPage;