import React, { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import  useTheme from '../../lib/theme/UseTheme'; 
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root') || (() => {
  const el = document.createElement('div');
  el.id = 'modal-root';
  document.body.appendChild(el);
  return el;
})();

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const { theme } = useTheme();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose} role="dialog">
      <div className={`${styles['modal-content']} ${theme === 'light' ? styles.light : styles.dark}`} onClick={e => e.stopPropagation()}>
        <button className={styles['modal-close']} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};