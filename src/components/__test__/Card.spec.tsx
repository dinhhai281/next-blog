import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
  const renderComponent = () =>
    render(
      <Card tagLabel='tagLabel' createdDate='createdDate' label='label' timeLabel='timeLabel' summary='summary' />,
    );

  describe('when render', () => {
    it('should match snapshot', () => {
      const { asFragment } = renderComponent();

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
