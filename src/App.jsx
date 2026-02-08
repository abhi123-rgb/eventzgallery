import Layout from './layout/Index.jsx';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={ <Layout /> }>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <Home /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
