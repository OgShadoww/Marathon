import React from 'react';
import Footer from './component/Footer';
import Begin from './section/Begin';
import Content from './section/Content';
import './styles/global/App.css'

const App = () => {
  return (
    <div className='App'>
      <Begin/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;