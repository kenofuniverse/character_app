import React from 'react'
import renderer from 'react-test-renderer'
import Pagination from '../Pagination'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Pagination current={1} total={10} onClickItem={() => {}} />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
