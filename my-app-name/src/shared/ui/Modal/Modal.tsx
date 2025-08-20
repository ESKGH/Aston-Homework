import React, { useEffect, type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import useTheme from '../../lib/theme/UseTheme';
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

export const Modal: React.FC<ModalProps> & {
  Header: React.FC<{ children: ReactNode }>;
  Body: React.FC<{ children: ReactNode }>;
  Footer: React.FC<{ children: ReactNode }>;
} = ({ isOpen, onClose, children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose} role="dialog">
      <div
        className={`${styles['modal-content']} ${theme === 'light' ? styles.light : styles.dark}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles['modal-close']} onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

Modal.Header = ({ children }) => <div className={styles['modal-header']}>{children}</div>;
Modal.Body   = ({ children }) => <div className={styles['modal-body']}>{children}</div>;
Modal.Footer = ({ children }) => <div className={styles['modal-footer']}>{children}</div>;