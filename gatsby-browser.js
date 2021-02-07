import React from 'react';
import './styles.scss';
import 'prismjs/themes/prism-okaidia.css';

import { VerticalOffsetProvider } from './src/contexts';

export const wrapRootElement = ({ element }) => <VerticalOffsetProvider>{element}</VerticalOffsetProvider>;
