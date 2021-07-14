import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';

import { ThemeProvider } from './contexts/theme.context';
import { TaskProvider } from './contexts/task.context';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <TaskProvider>
          <Navbar />
          <Main />
          <Footer />
        </TaskProvider>
      </ThemeProvider>
    </div>
  );
}
