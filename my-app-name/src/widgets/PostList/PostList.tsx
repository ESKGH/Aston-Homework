import React, { useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

export type Post = {
  id: number;
  title: string;
  content: string;
};

type PostListProps = {
  posts: Post[];
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const postItems = useMemo(
    () => posts.map((post) => (
      <PostCard key={post.id} title={post.title} content={post.content} />
    )),
    [posts]
  );

  return <div className={styles.postList}>{postItems}</div>;
};

export default PostList;
