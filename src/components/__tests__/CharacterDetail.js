import React from 'react'
import CharacterDetail from '../CharacterDetail'
import renderer from 'react-test-renderer'

jest.mock('moment', () => () => ({format: () => '2017-11-04T18:48:46.250Z'}));

it('renders correctly', () => {
  const detail = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth",
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
  }
  const tree = renderer
    .create(<CharacterDetail
              detail={detail}
              loadDetail={(id) => {/**/}}
              match={{params: {id: 1}}}
              history={{}}
              isFetching={false}
            />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
