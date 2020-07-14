// data:
// {
//   "id": 2086,
//   "book_author": [
//       "Ανώνυμος"
//   ],
//   "book_title": "Ο Αλέξανδρος ο Μακεδών",
//   "book_publication_year": 1529,
//   "book_publication_country": "Ιταλία",
//   "book_publication_city": "Βενετία",
//   "book_pages": 104
// }
const transformer = ({
  id,
  book_author = [],
  book_title,
  book_publication_year,
  book_publication_country,
  book_publication_city,
  book_pages,
}) => ({
  id: String(id),
  author: book_author.join(', '),
  title: book_title,
  year: String(book_publication_year),
  country: book_publication_country,
  city: book_publication_city,
  pages: String(book_pages)
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


export default transformer;
