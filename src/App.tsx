import React from 'react';
import './App.css';
import JsonView from './components/json-view/json-view';
interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <JsonView></JsonView>
    </div>
  );
}

export default App;
