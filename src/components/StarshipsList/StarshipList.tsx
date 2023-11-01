import React, { Component, ReactElement } from 'react';
import StarshipItemComponent from './Starship/StarshipItemComponent';
import style from './StarshipList.module.scss';
import { StarshipData } from '../../interfaces/interfaces';

// class StarshipList extends Component<StarshipData, void> {
//   render(): ReactElement {
//     const { results } = this.props;
//     const StarshipItems = results.map((result) => {
//       // const { url } = result;
//       // const parts = url.split('/');
//       // const key = parts[parts.length - 2];
//
//       return new StarshipItemComponent({
//         name: result.name,
//         manufacturer: `${result.manufacturer}`,
//         cost: `${result.cost_in_credits}`,
//         length: `${result.length}`,
//         passengers: `${result.passengers}`,
//       });
//     });
//
//     return (
//       <div className={style.starships}>
//         {StarshipItems.map((item, index) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <React.Fragment key={index}>{item}</React.Fragment>
//         ))}
//       </div>
//     );
//   }
// }
class StarshipList extends Component<StarshipData, void> {
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
