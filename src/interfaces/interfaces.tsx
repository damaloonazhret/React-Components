import React, { ReactNode } from 'react';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarshipData {
  count?: number;
  next?: string;
  previous?: null | string;
  results: Starship[];
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
}

export interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export interface SearchState {
  searchTerm: string;
}

export interface SearchButtonProps {
  searchTerm: string;
  onSearch: SearchProps['onSearch'];
}

export interface MainPageState {
  results: Starship[];
  filteredResults: Starship[];
  isLoading: boolean;
}

export interface StarshipListProps {
  results: Starship[];
}

export interface StarshipItemProps {
  name: string;
  manufacturer: string;
  cost: string;
  length: string;
  passengers: string;
}

export type SetMainPageState = React.Dispatch<
  React.SetStateAction<MainPageState>
>;
