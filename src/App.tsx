import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainPageProvider from './components/MainPageContext/MainPageProvider/MainPageProvider';
import MainPage from './components/MainPage/MainPage';

const App = (): ReactElement => {
  return (
    <MainPageProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </BrowserRouter>
    </MainPageProvider>
  );
};

export default App;
