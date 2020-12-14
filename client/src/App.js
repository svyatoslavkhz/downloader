import React from 'react';
import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';




function App() {

  return (
      <div>
        <NavBar 
          language={window.location.pathname.slice(1,3)}
        />
        <Footer />
      </div>
  );
}

export default App;
