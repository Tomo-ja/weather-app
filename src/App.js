import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

export const WeatherData = React.createContext()



function App() {


  return (
    <div className="app">
        {/* <weatherData.Provider> */}
          <Header/>
        {/* </weatherData.Provider> */}
      {/* <weatherData.Provider> */}
        <Main />
      {/* </weatherData.Provider> */}
      <Footer />
    </div>
  );
}

export default App;
