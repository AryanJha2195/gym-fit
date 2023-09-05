import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './components/NavBarr.jsx';
import Carasoul from './components/Carasoul.jsx';
import SearchBar from './components/SearchBar.jsx';
import Cards from './components/Cards.jsx';
import Foootter from './components/Foootter.jsx';

function App() {
  return (
    <div className="App">
      <NavBarr/>
      <Carasoul/>
      <SearchBar/>
      <Cards/>
      <Foootter/>
    </div>
  );
}

export default App;
