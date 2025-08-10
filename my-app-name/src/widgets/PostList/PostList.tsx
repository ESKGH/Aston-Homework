import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css'; 

type Post = {
  id: number;
  title: string;
  content: string;
};

const posts: Post[] = [
  { id: 1, title: '1 пост', content: 'Hello, 1 World!' },
  { id: 2, title: '2 пост', content: 'Hello, 2 World!.' },
  { id: 3, title: '3 пост', content: 'Hello, 3 World!' },
  { id: 4, title: '4 пост', content: 'Hello, 4 World!' },
  { id: 5, title: '5 пост', content: 'Hello, 5 World!' },
  { id: 6, title: '6 пост', content: 'Hello, 6 World!' },
  { id: 7, title: '7 пост', content: 'Hello, 7 World!' },
  { id: 8, title: '8 пост', content: 'Hello, 8 World!' },
  { id: 9, title: '9 пост', content: 'Hello, 9 World!' },
];

const PostList: React.FC = () => {
  return (
    <div className={styles.postList}>
      {posts.map(post => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostList;