import { useState, useCallback } from 'react';
import styles from './CommentList.module.css';
import useTheme from '../../../shared/lib/theme/UseTheme';
import Button from '../../../shared/ui/Button/Button';
import { commentsApi } from '../../../entities/comment/api/commentsApi';

type CommentListProps = {
  postId: number;
  initialOpen?: boolean;
};

const CommentList: React.FC<CommentListProps> = ({ postId, initialOpen = true }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(initialOpen);

  const { data: comments, isLoading, isError } = commentsApi.useGetPostCommentsQuery(postId);

  const toggleComments = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={`${styles.commentList} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.headerRow}>
        <h3 className={styles.heading}>Комментарии</h3>
        <Button onClick={toggleComments}>
          {isOpen ? 'Свернуть комментарии' : 'Показать комментарии'}
        </Button>
      </div>

      {isOpen && (
        <>
          {isLoading && <p className={styles.message}>Загрузка комментариев…</p>}
          {isError && <p className={styles.error}>Не удалось загрузить комментарии</p>}
          {!isLoading && !isError && comments && (
            <div className={styles.commentContainer}>
              {comments.map((c) => (
                <div key={c.id} className={styles.commentItem}>
                  <div className={styles.commentAuthor}>
                    <span className={styles.name}>{c.name}</span>
                    <span className={styles.email}> · {c.email}</span>
                  </div>
                  <p className={styles.commentText}>{c.body}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentList;
