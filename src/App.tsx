import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainPageProvider from './components/MainPageContext/MainPageProvider/MainPageProvider';
import MainPage from './components/MainPage/MainPage';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <MainPageProvider>
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </MainPageProvider>
    </BrowserRouter>
  );
};

export default App;
