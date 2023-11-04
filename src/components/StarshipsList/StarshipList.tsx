import React, { Component, ReactElement } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import style from './StarshipList.module.scss';
import { StarshipData } from '../../interfaces/interfaces';

class StarshipList extends Component<StarshipData> {
  render(): ReactElement {
    const { results } = this.props;
    const StarshipItems = results.map((result) => (
      <StarshipItemComponent
        key={result.name}
        name={result.name}
        manufacturer={`${result.manufacturer}`}
        cost={`${result.cost_in_credits}`}
        length={`${result.length}`}
        passengers={`${result.passengers}`}
      />
    ));

    return <div className={style.starships}>{StarshipItems}</div>;
  }
}

export default StarshipList;
