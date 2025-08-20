import styles from './Header.module.css';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header
      className={styles.header}
    >
      <div>POSTS project</div>
      <div className={styles.header_btn_container}>
        <Button onClick={onOpenModal}>
          О проекте
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;