import React, { ReactElement } from 'react';
import style from '../StarshipList.module.scss';
import { Starship } from '../../../interfaces/interfaces';

const StarshipItemComponent = (props: Starship): ReactElement => {
  const { name, manufacturer, cost, length, passengers } = props;
  return (
    <div className={style.starships__item}>
      <div>Name: {name}</div>
      <div>Manufacturer: {manufacturer}</div>
      <div>Cost: {cost}</div>
      <div>Length: {length}</div>
      <div>Passengers: {passengers}</div>
    </div>
  );
};

export default StarshipItemComponent;
