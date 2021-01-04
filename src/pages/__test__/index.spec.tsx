import { render } from '@testing-library/react';
import Home from 'pages';
import React from 'react';

describe('Home', () => {
  it('render correctly', () => {
    const { asFragment } = render(<Home></Home>);

    expect(asFragment()).toMatchSnapshot();
  });
});
