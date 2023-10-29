import { Component, ReactElement } from 'react';
import getStarshipsList from '../../api/getStarshipsList';
import Starship from './Starship/Starship';
import style from './StarshipList.module.scss';

class ItemList extends Component<void, void> {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const results = await getStarshipsList();
    this.setState({ results });
  }

  render(): ReactElement {
    const { results } = this.state;

    return (
      <section className={style.starships}>
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
      </section>
    );
  }
}

export default ItemList;
