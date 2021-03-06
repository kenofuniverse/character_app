import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import Landing from '../Landing'

it('renders correctly', () => {
  const items = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    {
      "id": 183,
      "name": "Johnny Depp",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-500A)",
        "url": "https://rickandmortyapi.com/api/location/23"
      },
      "location": {
        "name": "Earth (C-500A)",
        "url": "https://rickandmortyapi.com/api/location/23"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/8"
      ],
      "url": "https://rickandmortyapi.com/api/character/183",
      "created": "2017-12-29T18:51:29.693Z"
    }
  ]
  const tree = renderer
    .create(
      <MemoryRouter>
        <Landing
          match={{params: {}}}
          history={{}}
          characterList={items}
          pageInfo={{}}
          isFetching={false}
          isError={false}
          loadCharacters={()=>{}}
        />
      </MemoryRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
