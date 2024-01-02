// App.jsx
import React from 'react';
import { Tldraw } from '@tldraw/tldraw';
import '@tldraw/tldraw/tldraw.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, position: 'relative', zIndex: 0, marginTop: '60px' }}>
        <Tldraw persistenceKey="my-persistence-key" />
      </div>
    </div>
  );
};

export default App;
