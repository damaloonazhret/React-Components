import React, { ReactElement } from 'react';
import s from './Preloader.module.scss';

function Preloader(): ReactElement {
  return (
    <div className={s.loader__container}>
      <div className={s.loader}>loading</div>;
    </div>
  );
}

export default Preloader;
