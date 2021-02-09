import './App.css';
import Header from './componentes/Header';
import Technologies from './componentes/Technologies';
import MainContent from './componentes/MainContent';
import NavBar from './componentes/NavBar';

const App = () => {
  return (
    <div className="MainClasses">
      <Header/>
      <Technologies/>
      <NavBar/>
      <MainContent/>
    
    </div>
  );
}


export default App;
