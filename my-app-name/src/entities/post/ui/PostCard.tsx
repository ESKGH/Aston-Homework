import styles from './PostCard.module.css';
import useTheme from '../../../shared/lib/theme/UseTheme'; 

type PostCardProps = {
  title: string;
  content: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  const { theme } = useTheme(); 

  return (
    <div className={`${styles.postCard} ${theme === 'light' ? styles.light : styles.dark}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;