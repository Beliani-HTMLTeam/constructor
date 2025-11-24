import React from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Toaster
    duration={7500}
    expand={true}
    closeButton={true}
    visibleToasts={15}
    richColors
    position="top-right"
  />
);
