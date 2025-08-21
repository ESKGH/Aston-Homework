import { useState } from 'react';
import PostList from '../../widgets/PostList/PostList';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import CommentList from '../../widgets/CommentList/ui/CommentList';
import  usePosts  from '../../widgets/PostList/hooks/UsePosts';
import styles from './PostPage.module.css';

const PostsPage = () => {
  const { posts, isLoading } = usePosts();
  const [minLength, setMinLength] = useState(0);

  return (
    <div className={styles.page}>
      <section className={styles.postsSection}>
        <PostLengthFilter value={minLength} onChange={setMinLength} />
        <PostList posts={posts} minLength={minLength} isLoading={isLoading} />
      </section>

      <aside className={styles.commentsSection}>
        <CommentList />
      </aside>
    </div>
  );
};

export default PostsPage;