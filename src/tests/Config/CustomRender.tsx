import React, { ReactElement, ReactNode } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import MainPageTestContext from './TestContext';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): ReactElement => {
  return (
    <BrowserRouter>
      <MainPageTestContext>
        <ErrorBoundary>{children}</ErrorBoundary>
      </MainPageTestContext>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
