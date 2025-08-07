import styles from './PostCard.module.css';


type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className={styles.postCard}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
