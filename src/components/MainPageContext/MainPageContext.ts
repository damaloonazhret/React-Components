import React from 'react';
import { MainPageAction, MainPageState } from './interfaces';

const MainPageContext = React.createContext<
  | {
      state: MainPageState;
      dispatch: React.Dispatch<MainPageAction>;
    }
  | undefined
>(undefined);

export default MainPageContext;
