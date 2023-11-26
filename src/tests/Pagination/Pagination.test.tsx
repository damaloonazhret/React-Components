import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe } from 'vitest';
import Pagination from '../../components/Pagination/Pagination';
import { render } from '../Config/CustomRender';

describe('Make sure the component updates URL query parameter when page changes', () => {
  test('Render pagination', () => {
    render(<Pagination />);
    screen.debug();
  });
});
