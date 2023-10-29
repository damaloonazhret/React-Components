import { Component, ReactElement } from 'react';
import Search from '../Search/Search';
import ItemList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import getStarshipsList from '../../api/getStarshipsList';
import getAllStarships from '../../api/getAllStarships';
import Preloader from '../../common/Preloader/Preloader';

class MainPage extends Component<void, void> {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      filteredResults: [],
      isLoading: true,
    };
  }

  async componentDidMount(): Promise<void> {
    const dataPage = localStorage.getItem('data-page');
    const results = dataPage ? JSON.parse(dataPage) : await getStarshipsList();
    // const { results } = data;
    this.setState({ results, isLoading: false });
    await getAllStarships();
  }

  handleSearch = (searchTerm): void => {
    const allStarships = localStorage.getItem('data-page-all');
    let { results } = this.state;
    if (allStarships) {
      results = JSON.parse(allStarships);
    }
    const filteredResults = results.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredResults });
  };

  render(): ReactElement {
    const { results, filteredResults, isLoading } = this.state;
    const displayedResults = filteredResults.length ? filteredResults : results;

    return (
      <section className={style.main}>
        <Search onSearch={this.handleSearch} />
        {isLoading ? <Preloader /> : <ItemList results={displayedResults} />}
        <div className={style.stars} />
        <div className={style.twinkling} />
      </section>
    );
  }
}

export default MainPage;
