import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostList.module.css';

export type Post = {
  id: number;
  title: string;
  body: string;
};

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.postCard}
          onClick={() => navigate(`/posts/${post.id}`)}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;