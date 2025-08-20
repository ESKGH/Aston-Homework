import { useState } from 'react';
import styles from './Header.module.css';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import Button from '../../shared/ui/Button/Button';
import { Modal } from '../../shared/ui/Modal/Modal';

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className={styles.header}>
      <div>POSTS project</div>
      <div className={styles.header_btn_container}>
        <Button onClick={openModal}>О проекте</Button>
        <ThemeSwitcher />
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          <p>
            Данный проект является учебным примером, созданным в рамках программы Aston
            для FrontEnd разработчиков. В этой версии были реализованы:
          </p>
          <ul>
            <li>1. Модальное окно с compound components</li>
            <li>2. Фильтрация постов по длине заголовка</li>
            <li>3. Свертывание/разворачивание комментариев</li>
            <li>4. Оптимизация через HOC и хуки</li>
          </ul>
          <p>Версия: 0.0.3</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
