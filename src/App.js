import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import CounterDemo from './counter/CounterDemo';
import ReduxDemo from './todo/ReduxDemo';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <Provider store={store}>
      <div className="app">
        <h1>React Training Demos</h1>
        
        <div className="tabs">
          <button 
            className={activeTab === 'counter' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('counter')}
          >
            Class vs Hooks
          </button>
          <button 
            className={activeTab === 'redux' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('redux')}
          >
            Hooks vs Redux
          </button>
        </div>
        
        {activeTab === 'counter' && <CounterDemo />}
        {activeTab === 'redux' && <ReduxDemo />}
      </div>
    </Provider>
  );
}

export default App;