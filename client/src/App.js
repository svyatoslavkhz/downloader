import React from 'react';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';




function App() {
  const lang = window.location.pathname.slice(1,3) ? window.location.pathname.slice(1,3) : 'ru'
  return (
      <div>
        <NavBar 
          language={lang}
        />
        <Footer />
      </div>
  );
}

export default App;
