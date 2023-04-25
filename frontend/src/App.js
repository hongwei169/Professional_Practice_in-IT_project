import { BrowserRouter , Routes, Route , Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// Components and Pages
import Navbar from './components/Navbar';
import About from './pages/About';
import Edit from './components/EditWorkout';
import Footer from './components/Footer';
import WorkOut from './pages/Workout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/about" element={ <About /> } />
            <Route path="/edit/:id" element={ <Edit />} />
            <Route path="/workout" element={<WorkOut />} />
            <Route path="/" element={user ? <Home /> : <Navigate to={"/login"}/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to={"/"}/>} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to={"/"}/>} />
          </Routes> 
        </div>
        <Footer /> 
      </BrowserRouter>
    </div>


  );
}

export default App;
