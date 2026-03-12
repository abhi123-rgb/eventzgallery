import Layout from './layout/Index.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
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
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
