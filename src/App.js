import './App.css';
import Seat from './components/Seat/Seat';
import TicketBox from './components/TicketBox';

function App() {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const result = arr.map((items, index) => {
    return (
      <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
        {items.map((subItems, subIndex) => {
          return (
            <Seat
              key={subIndex}
              subItems={subItems}
              style={{ padding: '30px' }}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className="App">
      <TicketBox />
    </div>
  );
}

export default App;
