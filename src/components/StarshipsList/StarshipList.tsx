import React, { ReactElement } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import { Starship, StarshipData } from '../../interfaces/interfaces';
import style from './StarshipList.module.scss';

function StarshipList(props: StarshipData): ReactElement {
  const { results } = props;
  const StarshipItems = results.map((result) => (
    <StarshipItemComponent key={result.name} {...(result as Starship)} />
  ));
  return <div className={style.starships}>{StarshipItems}</div>;
}
export default StarshipList;
