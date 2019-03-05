import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import CharacterCard from '../CharacterCard'

it('renders correctly', () => {
  const item = {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "created": "2017-11-04T18:50:21.651Z"
  }
  const tree = renderer
    .create(
      <MemoryRouter>
        <CharacterCard item={item} />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
