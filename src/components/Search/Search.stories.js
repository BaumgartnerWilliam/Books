import '../../App.scss'; // workaround for storybook

import React from 'react';
import { action } from '@storybook/addon-actions';
import Search from './Search';

export default { title: 'Search' };

const props = {
  onChange: value => action('onChange', value)
};

export const withOnchange = () => <Search {...props} />;
export const withButtons = () => (
  <Search {...props}>
    <Search.Previous onClick={action('prev')} />
    <Search.Next onClick={action('next')} />
  </Search>
);
