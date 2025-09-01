import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CommentList from '../../widgets/CommentList/ui/CommentList';
import styles from './PostDetailPage.module.css';
import { postsApi } from '../../entities/post/api/postsApi';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postId = id ? Number(id) : null;

  const { data: post, isLoading, isError } = postsApi.useGetPostByIdQuery(postId!, {
    skip: !postId,
  });

  if (!postId) return <p className={styles.message}>Некорректный пост</p>;
  if (isLoading) return <p className={styles.message}>Загрузка…</p>;
  if (isError || !post) return <p className={styles.message}>Пост не найден</p>;

  return (
    <div className={styles.page}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className={styles.links}>
        <Link to={`/users/${post.userId}/posts`}>Другие посты автора</Link>
        <Link to={`/users/${post.userId}/albums`}>Альбомы автора</Link>
        <Link to={`/users/${post.userId}/todos`}>Список дел автора</Link>
      </div>

      {/* Комментарии через CommentList */}
      <section className={styles.comments}>
        <CommentList postId={post.id} />
      </section>
    </div>
  );
};

export default PostDetailPage;
