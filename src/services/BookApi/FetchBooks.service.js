import faker from 'faker';

const fetchBooks = ({ fetch, baseUrl }) => async ({
  page = 1,
  itemsPerPage = 20,
  search = ''
}) =>
  await fetch(baseUrl, {
    page,
    itemsPerPage,
    filters: [{ type: 'all', values: [search] }]
  });

export const createMockBook = () => ({
  id: faker.random.number(),
  book_author: faker.random.word(),
  book_title: faker.random.word(),
  book_publication_year: faker.random.number(),
  book_publication_country: faker.random.word(),
  book_publication_city: faker.random.word(),
  book_pages: faker.random.number()
});

export const mockData = {
  books: Array(10).fill(0).map(createMockBook),
  count: faker.random.number()
};

export default fetchBooks;
