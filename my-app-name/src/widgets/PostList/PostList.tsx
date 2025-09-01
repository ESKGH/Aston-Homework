import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from '../../entities/post/ui/PostCard';
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
          onClick={() => navigate(`/posts/${post.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <PostCard title={post.title} content={post.body} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
