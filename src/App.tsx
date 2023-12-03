import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import store from './redux/store';
import { Provider } from 'react-redux';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm/ControlledForm';
import './App.scss';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul className="Nav">
            <li>
              <Link to={'/uncontrolled'}>Uncontrolled Form</Link>
            </li>
            <li>
              <Link to={'/controlled'}>Controlled Form</Link>
            </li>
            <li>
              <Link to={'/'}>Main</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/uncontrolled" element={<UncontrolledForm />} />
          <Route path="/controlled" element={<ControlledForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
