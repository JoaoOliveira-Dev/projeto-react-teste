import logo from './logo.svg';
import './App.css';

// Componentes da tela
import Header from './telas/header/header'
import Nav from './telas/nav/nav'
import Home from './telas/Inicio/home';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App;
