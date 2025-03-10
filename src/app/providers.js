'use client';

import { BrowserRouter as Router } from 'react-router-dom';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export function Providers({ children }) {
  return (
    <Router>
      {children}
    </Router>
  );
}
