import { Component, ReactElement } from 'react';
import Search from '../Search/Search';
import StarshipList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import initStarships from '../../utils/initStarships/initStarships';
import filterResults from '../../utils/filterResults/filterResults';
import { MainPageState, Starship } from '../../interfaces/interfaces';

class MainPage extends Component<Record<string, never>, MainPageState> {
  state = {
    results: [],
    filteredResults: [],
    isLoading: true,
  };

  async componentDidMount(): Promise<void> {
    await this.setStarshipsState();
  }

  setStarshipsState = async (): Promise<void> => {
    const results = await initStarships();
    this.setState({ results, isLoading: false });
  };

  handleSearch = (searchTerm: string): void => {
    const { results } = this.state;

    if (searchTerm === '') {
      this.clearFilteredResults();
    } else {
      const filteredResults = filterResults(results, searchTerm);
      this.updateFilteredResultsInStateAndStorage(filteredResults);
      this.setState({ filteredResults });
    }
  };

  clearFilteredResults = (): void => {
    this.setState({ filteredResults: [] });
    localStorage.removeItem('data-page-filter');
  };

  updateFilteredResultsInStateAndStorage = (
    filteredResults: Array<Starship>
  ): void => {
    this.setState({ filteredResults });
    localStorage.setItem('data-page-filter', JSON.stringify(filteredResults));
  };

  render(): ReactElement {
    const { results, filteredResults, isLoading } = this.state;
    const displayedResults = filteredResults.length ? filteredResults : results;

    return (
      <section className={style.main}>
        <Search onSearch={this.handleSearch} />
        {isLoading ? (
          <Preloader />
        ) : (
          <StarshipList results={displayedResults} />
        )}
        <div className={style.stars} />
        <div className={style.twinkling} />
      </section>
    );
  }
}

export default MainPage;
