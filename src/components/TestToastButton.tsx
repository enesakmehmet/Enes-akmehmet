import React from 'react';
import { useToast } from './Toast';

const TestToastButton: React.FC = () => {
  const showToast = useToast();
  return (
    <button
      style={{
        margin: '24px',
        padding: '12px 20px',
        fontSize: '1.1rem',
        background: '#a21caf',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
      onClick={() => showToast('Tebrikler! Toast bildirimi başarıyla çalışıyor.', 'success')}
    >
      Test Toast Göster
    </button>
  );
};

export default TestToastButton;
