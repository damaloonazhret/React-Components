import { Component, ReactElement } from 'react';
import getStarshipsList from '../../api/getStarshipsList';
import Starship from './Starship/Starship';
import style from './StarshipList.module.scss';
import getAllStarships from '../../api/getAllStarships';
import Preloader from '../../common/Preloader/Preloader';

class ItemList extends Component<void, void> {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isLoading: true,
    };
  }

  async componentDidMount(): Promise<void> {
    const dataPage = localStorage.getItem('data-page');
    const results = dataPage ? JSON.parse(dataPage) : await getStarshipsList();
    this.setState({ results, isLoading: false });
    await getAllStarships();
  }

  render(): ReactElement {
    const { results, isLoading } = this.state;

    return (
      <section className={style.starships}>
        {isLoading ? (
          <Preloader />
        ) : (
          results.map((result) => {
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
          })
        )}
      </section>
    );
  }
}

export default ItemList;
