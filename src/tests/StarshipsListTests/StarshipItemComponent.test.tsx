import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import StarshipItemComponent from '../../components/Starships/StarshipItemComponent';

const starshipMock = {
  name: 'Starship 1',
  manufacturer: 'Manufacturer 1',
  cost: '1000',
  length: '150m',
  passengers: '50',
};

test('renders starship item with correct information', () => {
  const { getByText } = render(<StarshipItemComponent {...starshipMock} />);

  expect(getByText(`Name: ${starshipMock.name}`)).toBeInTheDocument();
  expect(
    getByText(`Manufacturer: ${starshipMock.manufacturer}`)
  ).toBeInTheDocument();
  expect(getByText(`Cost: ${starshipMock.cost}`)).toBeInTheDocument();
  expect(getByText(`Length: ${starshipMock.length}`)).toBeInTheDocument();
  expect(
    getByText(`Passengers: ${starshipMock.passengers}`)
  ).toBeInTheDocument();
});
