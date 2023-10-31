import { Component, ReactElement } from 'react';
import style from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component<void, void> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error): { error: never } {
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
