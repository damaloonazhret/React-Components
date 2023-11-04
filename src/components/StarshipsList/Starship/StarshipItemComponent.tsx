import React, { Component, ReactElement } from 'react';
import style from '../StarshipList.module.scss';

class StarshipItemComponent extends Component<{
  name: string;
  manufacturer: string;
  cost: string;
  length: string;
  passengers: string;
}> {
  render(): ReactElement {
    const { name, manufacturer, cost, length, passengers } = this.props;
    return (
      <div className={style.starships__item}>
        <div>Name: {name}</div>
        <div>Manufacturer: {manufacturer}</div>
        <div>Cost: {cost}</div>
        <div>Length: {length}</div>
        <div>Passengers: {passengers}</div>
      </div>
    );
  }
}

export default StarshipItemComponent;
