import './App.css';
import Seat from './components/Seat/Seat';
import TicketBooker from './components/Seat/TicketBooker';
import TicketBox from './components/TicketBox';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Checkout from './components/Checkout';
import Navigation from './components/Navigation';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: '#16213E', height: '100vh' }}
    >
      <Navigation />
      <div style={{ marginTop: '40px' }}>
        <Routes>
          <Route path="/" element={<TicketBooker />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
