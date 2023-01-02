import { BrowserRouter , Routes, Route } from 'react-router-dom';

// Components and Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Edit from './components/EditWorkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
