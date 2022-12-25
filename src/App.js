import React from 'react';
import Access from './section/Access';
import Begin from './section/Begin';
import Content from './section/Content';
import './styles/global/App.css'

const App = () => {
  return (
    <div className='App'>
      <Begin/>
      <Access/>
      <Content/>
    </div>
  );
};

export default App;