import React, { useContext } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import { Starship } from '../../_interfaces_/globalInterfaces';
import style from './StarshipList.module.scss';
import MainPageContext from '../MainPageContext/MainPageContext';

const StarshipList: React.FC = () => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    throw new Error('MainPageContext is not defined!');
  }

  const { state } = contextValue;

  const displayedResults = state.filteredResults.length
    ? state.filteredResults
    : state.results;

  const StarshipItems = displayedResults.map((result) => (
    <StarshipItemComponent key={result.name} {...(result as Starship)} />
  ));

  return <div className={style.starships}>{StarshipItems}</div>;
};

export default StarshipList;
