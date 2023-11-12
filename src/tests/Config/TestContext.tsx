import React, { useMemo, useState } from 'react';
import { MainPageState } from '../../interfaces/interfaces';
import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../../constants/constants';

const result = [
  {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    manufacturer: 'Corellian Engineering Corporation',
    cost: '3500000',
    length: '150',
    max_atmosphering_speed: '950',
    crew: '30-165',
    passengers: '600',
    cargo_capacity: '3000000',
    consumables: '1 year',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'corvette',
    pilots: [],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    created: '2014-12-10T14:20:33.369000Z',
    edited: '2014-12-20T21:23:49.867000Z',
    url: 'https://swapi.dev/api/starships/2/',
  },
  {
    name: 'Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
    manufacturer: 'Kuat Drive Yards',
    cost: '150000000',
    length: '1,600',
    max_atmosphering_speed: '975',
    crew: '47,060',
    passengers: 'n/a',
    cargo_capacity: '36000000',
    consumables: '2 years',
    hyperdrive_rating: '2.0',
    MGLT: '60',
    starship_class: 'Star Destroyer',
    pilots: [],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    created: '2014-12-10T15:08:19.848000Z',
    edited: '2014-12-20T21:23:49.870000Z',
    url: 'https://swapi.dev/api/starships/3/',
  },
  {
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
    cost: '240000',
    length: '38',
    max_atmosphering_speed: '1000',
    crew: '5',
    passengers: '75',
    cargo_capacity: '180000',
    consumables: '1 month',
    hyperdrive_rating: '1.0',
    MGLT: '70',
    starship_class: 'landing craft',
    pilots: [],
    films: ['https://swapi.dev/api/films/1/'],
    created: '2014-12-10T15:48:00.586000Z',
    edited: '2014-12-20T21:23:49.873000Z',
    url: 'https://swapi.dev/api/starships/5/',
  },
  {
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer:
      'Imperial Department of Military Research, Sienar Fleet Systems',
    cost: '1000000000000',
    length: '120000',
    max_atmosphering_speed: 'n/a',
    crew: '342,953',
    passengers: '843,342',
    cargo_capacity: '1000000000000',
    consumables: '3 years',
    hyperdrive_rating: '4.0',
    MGLT: '10',
    starship_class: 'Deep Space Mobile Battlestation',
    pilots: [],
    films: ['https://swapi.dev/api/films/1/'],
    created: '2014-12-10T16:36:50.509000Z',
    edited: '2014-12-20T21:26:24.783000Z',
    url: 'https://swapi.dev/api/starships/9/',
  },
  {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    manufacturer: 'Corellian Engineering Corporation',
    cost: '100000',
    length: '34.37',
    max_atmosphering_speed: '1050',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
    pilots: [
      'https://swapi.dev/api/people/13/',
      'https://swapi.dev/api/people/14/',
      'https://swapi.dev/api/people/25/',
      'https://swapi.dev/api/people/31/',
    ],
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
    ],
    created: '2014-12-10T16:59:45.094000Z',
    edited: '2014-12-20T21:23:49.880000Z',
    url: 'https://swapi.dev/api/starships/10/',
  },
];

const MainPageTestContext = React.createContext<
  | {
      state: MainPageState;
      setState: React.Dispatch<React.SetStateAction<MainPageState>>;
    }
  | undefined
>(undefined);

const MainPageTestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<MainPageState>({
    results: result,
    filteredResults: result,
    isLoading: false,
    itemsCount: INITIAL_ITEMS_COUNT,
    currentPage: INITIAL_CURRENT_PAGE,
    itemsOnPage: INITIAL_ITEMS_ON_PAGE,
  });

  const contextValue = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <MainPageTestContext.Provider value={contextValue}>
      {children}
    </MainPageTestContext.Provider>
  );
};

export default MainPageTestProvider;
