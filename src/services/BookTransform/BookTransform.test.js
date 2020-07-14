import transformer from './BookTransform.service';

const testData = {
  "id": 101,
  "book_author": [
      "Author0",
      "Author1",
      "Author2"
  ],
  "book_title": "my book title",
  "book_publication_year": 2020,
  "book_publication_country": "publication country",
  "book_publication_city": "publication city",
  "book_pages": 99
};

test('transforms book api response', () => {
  const transformedData = transformer(testData);
  const expected = {
    id: '101',
    author: 'Author0, Author1, Author2',
    title: 'my book title',
    year: '2020',
    country: 'publication country',
    city: 'publication city',
    pages: '99'
  }
  expect(transformedData).toEqual(expected);
});

test('handles single author', () => {
  testData.book_author = ['author'];
  const transformedData = transformer(testData);
  const expected = {
    id: '101',
    author: 'author',
    title: 'my book title',
    year: '2020',
    country: 'publication country',
    city: 'publication city',
    pages: '99'
  }
  expect(transformedData).toEqual(expected);
});

test('handles empty author', () => {
  testData.book_author = [];
  const transformedData = transformer(testData);
  const expected = {
    id: '101',
    author: '',
    title: 'my book title',
    year: '2020',
    country: 'publication country',
    city: 'publication city',
    pages: '99'
  }
  expect(transformedData).toEqual(expected);
});
