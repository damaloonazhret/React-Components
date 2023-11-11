import React from 'react';
import { MainPageState } from '../../interfaces/interfaces';

const MainPageContext = React.createContext<
  | {
      state: MainPageState;
      setState: React.Dispatch<React.SetStateAction<MainPageState>>;
    }
  | undefined
>(undefined);

export default MainPageContext;
