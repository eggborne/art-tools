import { createPortal } from 'react-dom';
import style from './ConfirmModal.module.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, onConfirm, onCancel }: ConfirmModalProps) => {

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return;

  return createPortal(
    <div className={style.ConfirmModal + (isOpen ? ' ' + style.open : '')}>
      <div className={style.modalBody}>
        Do you really want to start over?
      </div>
      <div className={style.buttonArea}>
        <button className='red' onClick={onConfirm}>Do it</button>
        <button className='green' onClick={onCancel}>Never mind</button>
      </div>
    </div>,
    modalRoot
  );
};

export default ConfirmModal;
