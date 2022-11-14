import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { HashRouter } from 'react-router-dom';
import CoinPage from './components/CoinPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
