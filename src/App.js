import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import { BrowserRouter } from 'react-router-dom';
import CoinPage from './components/CoinPage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/coins/:id' element={<CoinPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
