import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import Header from '../Header'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Header  />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
