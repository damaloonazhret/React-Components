import React, { ReactElement } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import style from './StarshipList.module.scss';
import { StarshipListProps } from '../../interfaces/interfaces';

function StarshipList({ results }: StarshipListProps): ReactElement {
  const StarshipItems = results.map((result) => (
    <StarshipItemComponent
      key={result.name}
      name={result.name}
      manufacturer={result.manufacturer}
      cost={result.cost_in_credits}
      length={result.length}
      passengers={result.passengers}
    />
  ));

  return <div className={style.starships}>{StarshipItems}</div>;
}

export default StarshipList;
