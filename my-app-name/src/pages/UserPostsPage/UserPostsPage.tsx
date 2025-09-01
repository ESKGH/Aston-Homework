import React from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../widgets/PostList/PostList';
import UserTabs from '../../widgets/UserTabs/UserTabs';
import { postsApi } from '../../entities/post/api/postsApi';
import styles from './UserPostsPage.module.css';

const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { data: posts = [], isLoading } = postsApi.useGetPostsQuery();

  const userPosts = posts.filter((post) => post.userId === userId);

  if (!id) return <p className={styles.message}>Некорректный пользователь</p>;
  if (isLoading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <UserTabs userId={userId} />
      <h2>Посты пользователя {id}</h2>
      <PostList posts={userPosts} />
    </div>
  );
};

export default UserPostsPage;
