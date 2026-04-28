import { useState, useEffect } from 'react';

const listeners = new Set();
let toasts = [];
let nextId = 0;

const emit = () => {
  listeners.forEach(listener => listener([...toasts]));
};

export const toast = ({ title, description, variant = 'default', duration = 4000 }) => {
  const id = nextId++;
  const newToast = { id, title, description, variant };
  toasts = [...toasts, newToast];
  emit();

  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id);
    emit();
  }, duration);
};

export const useToast = () => {
  const [currentToasts, setCurrentToasts] = useState(toasts);

  useEffect(() => {
    listeners.add(setCurrentToasts);
    return () => listeners.delete(setCurrentToasts);
  }, []);

  return { toast, toasts: currentToasts };
};
