import React, { ReactElement } from 'react';
import s from './Preloader.module.scss';

function Preloader(): ReactElement {
  return <div className={s.loader}>loading</div>;
}

export default Preloader;
