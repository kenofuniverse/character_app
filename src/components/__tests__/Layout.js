import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import Layout from '../Layout'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
