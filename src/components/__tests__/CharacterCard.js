import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router';
import CharacterCard from '../CharacterCard'

describe('CharacterCard component', () => {
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

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <CharacterCard item={item} onSelectItem={() => {}}/>
        </MemoryRouter>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render contents correctly', () => {
    const rendered = shallow(<MemoryRouter><CharacterCard item={item} onSelectItem={() => {}} /></MemoryRouter>)
    expect(rendered.html()).toContain(item.name)
    expect(rendered.html()).toContain(item.image)
  })
})
