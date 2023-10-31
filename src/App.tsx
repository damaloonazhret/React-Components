import './App.css';
import { ReactElement } from 'react';
import MainPage from './components/MainPage/MainPage';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App(): ReactElement {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
