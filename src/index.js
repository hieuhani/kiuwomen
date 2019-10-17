import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import './assets/style.css';
import Home from './pages/home'

function App() {
  return (
    <Home />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
