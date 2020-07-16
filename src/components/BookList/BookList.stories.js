import '../../App.scss'; // workaround for storybook

import React from 'react';
import BookList from './BookList';
import faker from 'faker';

export default { title: 'BookList' };

const createBook = () => ({
  id: faker.random.number(),
  author: faker.random.word(),
  title: faker.random.word(),
  year: faker.random.number(),
  country: faker.random.word(),
  city: faker.random.word(),
  pages: faker.random.number()
});

const mockData = {
  books: Array(10).fill(0).map(createBook)
};

export const withMockData = () => <BookList {...mockData} />;
