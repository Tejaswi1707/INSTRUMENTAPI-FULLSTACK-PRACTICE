// App.js
import { BrowserRouter } from 'react-router-dom';
import InstrumentNavBar from './instrument/InstrumentNavBar';

function App() {
  return (
    <BrowserRouter>
      <InstrumentNavBar />
    </BrowserRouter>
  );
}

export default App;
