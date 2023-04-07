import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Play from './pages/Play';
import Leaderboard from './pages/Leaderboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>

        <Route path="/game" element={<Play></Play>}></Route>

        <Route path="/leaderboard" element={<Leaderboard></Leaderboard>}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
