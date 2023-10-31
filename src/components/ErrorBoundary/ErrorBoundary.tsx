import React, { ReactElement } from 'react';
import style from './ErrorBoundary.module.scss';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../interfaces/interfaces';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render(): ReactElement {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div>
          <p className={style.error}>Seems like an error occurred!</p>
          <p className={style.error}>{error.message}</p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
