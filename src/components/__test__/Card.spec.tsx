import { render } from '@testing-library/react';
import { none } from 'fp-ts/lib/Option';
import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
  const renderComponent = () =>
    render(
      <Card tagLabel='tagLabel' createdDate='createdDate' label='label' timeLabel='timeLabel' summary='summary' isFocus={none}/>,
    );

  describe('when render', () => {
    it('should match snapshot', () => {
      const { asFragment } = renderComponent();

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
