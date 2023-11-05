import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
