import React, { useState, useMemo } from 'react';
import PostList from '../../widgets/PostList/PostList';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import usePosts from '../../features/PostList/lib/hooks/UsePosts';
import styles from './PostPage.module.css';

const PostPage: React.FC = () => {
  const { posts, isLoading } = usePosts();
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(
    () => posts.filter((post) => post.title.length >= minLength),
    [posts, minLength]
  );

  if (isLoading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <PostLengthFilter value={minLength} onChange={setMinLength} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default PostPage;
