import React from 'react';
import Begin from './section/Begin';
import Content from './section/Content';
import './styles/global/App.css'

const App = () => {
  return (
    <div className='App'>
      <Begin/>
      <Content/>
    </div>
  );
};

export default App;