import { Component, ReactElement } from 'react';
import Starship from './Starship/Starship';
import style from './StarshipList.module.scss';
import { StarshipData } from '../../interfaces/interfaces';

class ItemList extends Component<StarshipData, void> {
  render(): ReactElement {
    const { results } = this.props;

    return (
      <div className={style.starships}>
        {results.map((result) => {
          const { url } = result;
          const parts = url.split('/');
          const id = parts[parts.length - 2];

          return (
            <Starship
              key={id}
              name={result.name}
              manufacturer={`${result.manufacturer}`}
              cost={`${result.cost_in_credits}`}
              length={`${result.length}`}
              passengers={`${result.passengers}`}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemList;
