'use client';
import { BrowserRouter as Router } from 'react-router-dom';

export function RouterProvider({ children }) {
  return <Router>{children}</Router>;
}