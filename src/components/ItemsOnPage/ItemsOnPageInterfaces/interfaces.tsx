import React from 'react';
import { Starship } from '../../../interfaces/interfaces';

export type SelectItemsOnPageProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setItemsOnPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setItemsCount: React.Dispatch<React.SetStateAction<number>>;
  setResults: React.Dispatch<React.SetStateAction<Starship[]>>;
};
