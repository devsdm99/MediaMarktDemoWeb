import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";
import Header from './components/Header';

import Router from './Router';


function App() {
  

  return (
    <div className="App">
      <Header />
      <Router/>
    </div>
  );
}

export default App;
