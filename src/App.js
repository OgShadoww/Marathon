import React, { useRef } from 'react';
import Footer from './component/Footer';
import Begin from './section/Begin';
import Content from './section/Content';
import Psentation from './section/Psentation';
import './styles/global/App.css'

const App = () => {
  const contentRef = useRef()
  const buttonHandler = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <div className='App'>
      <Begin buttonHandler={buttonHandler} Elementref={contentRef} scrollFunc={buttonHandler}/>
      <Psentation/>
      <Content Elementref={contentRef} scrollFunc={buttonHandler}/>
      <Footer/>
    </div>
  );
};

export default App;