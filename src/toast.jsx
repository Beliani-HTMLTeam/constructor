import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Toaster richColors position="top-right" />);
