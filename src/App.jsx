import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Anasayfa from './pages/Anasayfa'
import MuzikDinle from './pages/MuzikDinle'
import Projelerim from './pages/Projelerim'
import './App.css'
import { Provider } from "react-redux";
import { store } from "./Store";
import './css/Navbar.css'
import Player from "./components/Player";


function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>




        <div className="navbar">
          <nav>
            <ul>
              <li><Link to="/">Anasayfa  🎉</Link></li>
              <li><Link to="/muzikdinle">Müzik Dinle 🎉</Link></li>
              <li><Link to="/projelerim">Projelerim 🎉</Link></li>

            </ul>
          </nav>
        </div>




        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/muzikdinle" element={<MuzikDinle />} />
          <Route path="/projelerim" element={<Projelerim />} />
        </Routes>

        <Player />

      </BrowserRouter>
    </Provider>






  );
}

export default App;
