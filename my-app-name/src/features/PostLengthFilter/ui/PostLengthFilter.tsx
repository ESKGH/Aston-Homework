import styles from './PostLengthFilter.module.css';
import useTheme from '../../../shared/lib/theme/UseTheme';

type PostLengthFilterProps = {
  value: number;
  onChange: (value: number) => void;
};

const PostLengthFilter: React.FC<PostLengthFilterProps> = ({ value, onChange }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.filter} ${theme === 'dark' ? styles.dark : ''}`}>
      <label className={styles.label} htmlFor="minLength">
        Мин. длина заголовка:
      </label>
      <input
        id="minLength"
        className={styles.input}
        type="number"
        value={value === 0 ? '' : value}  
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        placeholder="Введите число..."
      />
    </div>
  );
};

export default PostLengthFilter;
