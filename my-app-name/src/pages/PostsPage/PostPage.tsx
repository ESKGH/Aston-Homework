import React, { useEffect, useState } from 'react';
import PostList, { type Post } from '../../widgets/PostList/PostList';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import CommentList from '../../widgets/CommentList/ui/CommentList';
import styles from './PostPage.module.css';

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [minLength, setMinLength] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) => post.title.length >= minLength);

  if (loading) return <p className={styles.message}>Загрузка...</p>;

  return (
    <div className={styles.page}>
      <PostLengthFilter value={minLength} onChange={setMinLength} />
      <PostList posts={filteredPosts} />
      <section className={styles.commentsSection}>
        <h2>Комментарии</h2>
        <CommentList />
      </section>
    </div>
  );
};

export default PostPage;
