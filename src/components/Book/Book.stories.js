import '../../App.scss'; // workaround for storybook

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Button } from '@storybook/react/demo';
import Book from './Book';

export default { title: 'Book' };

const mockData = {
  id: 2086,
  author: ['Ανώνυμος'],
  title: 'Ο Αλέξανδρος ο Μακεδών',
  year: 1529,
  country: 'Ιταλία',
  city: 'Βενετία',
  pages: 104
};

export const withMockData = () => <Book {...mockData} />;
export const withLayout = () => (
  <Container>
    <Col>
      <Row>
        <Book {...mockData} />
        <Book {...mockData} />
        <Book {...mockData} />
      </Row>
    </Col>
  </Container>
);
