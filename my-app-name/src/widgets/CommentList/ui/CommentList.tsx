import { useState, useCallback } from 'react';
import styles from './CommentList.module.css';
import useTheme from '../../../shared/lib/theme/UseTheme';
import Button from '../../../shared/ui/Button/Button';


type Comment = {
  id: number;
  author: string;
  text: string;
};

const comments: Comment[] = [
  { id: 1, author: 'Андрей', text: 'Очень полезный пост!' },
  { id: 2, author: 'Мария', text: 'Спасибо за информацию 🙌' },
  { id: 3, author: 'Иван', text: 'Жду новых публикаций.' },
];

const CommentList: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div
      className={`${styles.commentList} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
         <Button onClick={toggleComments}>
          {isOpen ? 'Свернуть комментарии' : 'Показать комментарии'}
        </Button>
      {/* <button className={styles.toggleBtn} onClick={toggleComments}>
        {isOpen ? 'Свернуть комментарии' : 'Показать комментарии'}
      </button> */}
      
      
      {isOpen && (
        <div className={styles.commentContainer}>
          {comments.map((c) => (
            <div key={c.id} className={styles.commentItem}>
              <div className={styles.commentAuthor}>{c.author}</div>
              <p className={styles.commentText}>{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;