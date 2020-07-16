import fetchBooks, { mockData } from './FetchBooks.service';

const fakeClient = jest.fn().mockResolvedValue(mockData);

test('fetch books api', async () => {
  const baseUrl = 'my-url';
  const client = fetchBooks({ fetch: fakeClient, baseUrl });
  const params = {
    page: 10,
    itemsPerPage: 22,
    search: 'searchParam'
  };
  const expectedParams = {
    page: 10,
    itemsPerPage: 22,
    filters: [{ type: 'all', values: ['searchParam'] }]
  };
  const response = await client(params);
  expect(fakeClient).toHaveBeenCalledWith(baseUrl, expectedParams);
  expect(response).toEqual(mockData);
});
