import React from 'react';
import { useSelector } from 'react-redux';
import StarshipItemComponent from './StarshipItemComponent';
import { Starship } from '../../_interfaces_/globalInterfaces';
import style from './StarshipList.module.scss';
import { MainPageState } from '../Actions/interfaces';

const StarshipList: React.FC = () => {
  const { filteredResults, results } = useSelector(
    (state: MainPageState) => state
  );
  const displayedResults = filteredResults.length ? filteredResults : results;

  const StarshipItems = displayedResults.map((result) => (
    <StarshipItemComponent key={result.name} {...(result as Starship)} />
  ));

  return <div className={style.starships}>{StarshipItems}</div>;
};

export default StarshipList;
