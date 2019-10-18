import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './assets/style.css';
import Home from './pages/home'
import { LayoutProvider } from './contexts/LayoutContext'

function App() {
  return (
    <LayoutProvider>
      <Home />
    </LayoutProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
