import { render } from '@testing-library/react';
import React from 'react';

import { NavigationBar } from '../NavigationBar';

describe('NavigationBar', () => {
  const renderComponent = () => render(<NavigationBar title='title' />);

  describe('when render', () => {
    it('should match snapshot', () => {
      const { asFragment } = renderComponent();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
