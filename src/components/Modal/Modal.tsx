// src/components/Modal/Modal.tsx
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal__overlay" onClick={handleBackgroundClick}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};
