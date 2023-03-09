import { BrowserRouter , Routes, Route } from 'react-router-dom';

// Components and Pages
import Navbar from './components/Navbar';
import About from './pages/About';
import Edit from './components/EditWorkout';
import Footer from './components/Footer';
import WorkOut from './pages/Workout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/"  />
            <Route path="/about" element={<About />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/workout" element={<WorkOut />} />
          </Routes> 
          <Footer /> 
        </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
