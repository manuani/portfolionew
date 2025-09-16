// Simplified toast hook for GitHub deployment
import { useState, useCallback, useEffect } from 'react';

let globalToasts = [];
let listeners = [];

const addToast = (toast) => {
  const id = Date.now().toString();
  const newToast = { id, ...toast };
  
  globalToasts = [...globalToasts, newToast];
  listeners.forEach(listener => listener([...globalToasts]));
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    globalToasts = globalToasts.filter(t => t.id !== id);
    listeners.forEach(listener => listener([...globalToasts]));
  }, 5000);
  
  return { id };
};

export function useToast() {
  const [toasts, setToasts] = useState([...globalToasts]);

  useEffect(() => {
    listeners.push(setToasts);
    return () => {
      listeners = listeners.filter(l => l !== setToasts);
    };
  }, []);

  const toast = ({ title, description, variant = 'default' }) => {
    return addToast({ title, description, variant });
  };

  return { toast, toasts };
}
