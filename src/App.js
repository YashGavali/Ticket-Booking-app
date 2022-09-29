import './App.css';
import Seat from './components/Seat/Seat';
import TicketBooker from './components/Seat/TicketBooker';
import TicketBox from './components/TicketBox';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: '#16213E', height: '100vh' }}
    >
      <div>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>

      <Routes>
        <Route path="/" element={<TicketBooker />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
