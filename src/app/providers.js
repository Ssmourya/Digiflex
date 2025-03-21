import dynamic from 'next/dynamic';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Dynamically import Router with no SSR
const RouterProvider = dynamic(
  () => import('./RouterProvider').then(mod => mod.RouterProvider),
  { ssr: true }
);

config.autoAddCss = false;

export function Providers({ children }) {
  return <RouterProvider>{children}</RouterProvider>;
}