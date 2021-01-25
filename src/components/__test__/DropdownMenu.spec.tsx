import { render } from '@testing-library/react';
import React from 'react';

import { DropdownMenu } from '../DropdownMenu';

describe('DropdownMenu', () => {
  const renderComponent = () =>
    render(
      <DropdownMenu>
        <span>title</span>
      </DropdownMenu>
    );
  it('should match snapshot', () => {
    const { asFragment } = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  });
});
