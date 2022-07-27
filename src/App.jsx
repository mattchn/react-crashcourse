import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent';
import MyFooter from './components/MyFooter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <MyFooter />
    </div>
  );
}

export default App;
