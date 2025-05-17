// Dialog Component
interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  
  const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-transparent bg-opacity-50 transition-opacity" 
          onClick={onClose}
          aria-hidden="true"
        ></div>
        
        {/* Dialog centered position */}
        <div className="flex items-center justify-center min-h-screen p-4">
          {/* Dialog content */}
          <div 
            className="relative z-10 bg-white rounded-lg shadow-xl max-w-md w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dialog;