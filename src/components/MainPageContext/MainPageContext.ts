import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPageState } from '../../interfaces/interfaces';

const MainPageContext = React.createContext<
  | {
      state: MainPageState;
      setState: React.Dispatch<React.SetStateAction<MainPageState>>;
      navigate: ReturnType<typeof useNavigate>;
    }
  | undefined
>(undefined);

export default MainPageContext;
