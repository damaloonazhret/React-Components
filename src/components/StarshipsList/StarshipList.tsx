import React, { Component, ReactElement } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import style from './StarshipList.module.scss';
import { Starship, StarshipData } from '../../interfaces/interfaces';

class StarshipList extends Component<StarshipData> {
  render(): ReactElement {
    const { results } = this.props;
    const StarshipItems = results.map((result) => (
      <StarshipItemComponent key={result.name} {...(result as Starship)} />
    ));

    return <div className={style.starships}>{StarshipItems}</div>;
  }
}

export default StarshipList;
