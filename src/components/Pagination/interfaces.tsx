import React from 'react';
import { PaginationActionProps } from '../../_interfaces_/interfaces';
import { Starship } from '../../_interfaces_/globalInterfaces';

export interface PaginationProps {
  itemsCount: number;
  currentPage: number;
  onPageChange: (props: PaginationActionProps) => void;
  itemsOnPage: number;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<React.SetStateAction<Starship[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
