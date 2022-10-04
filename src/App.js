import './App.css';
import TicketBooker from './components/Seat/TicketBooker';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div style={{ marginTop: '40px' }}>
        <Routes>
          <Route path="/Ticket-Booking-app" element={<TicketBooker />} />
          <Route path="/" element={<TicketBooker />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
