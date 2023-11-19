import './App.css';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainPage from './components/MainPage/MainPage';
import store from './_store_';

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <MainPage />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
