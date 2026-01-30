import Layout from './layout/Index.jsx';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Ourwork from './pages/Ourwork';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Navigate to="/home" /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/ourwork" element={ <Ourwork /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/aboutus" element={ <Aboutus /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
