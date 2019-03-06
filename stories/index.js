import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Container, Row, Col } from 'react-bootstrap'
import { MemoryRouter } from 'react-router';
import CharacterCard from '../src/components/CharacterCard'
import CharacterDetail from '../src/components/CharacterDetail'
import CharacterList from '../src/components/CharacterList'
import MultiCharacters from '../src/components/MultiCharacters'
import Pagination from '../src/components/Pagination'
import Header from '../src/components/Header'

import 'bootstrap/dist/css/bootstrap.css'

const item = {
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

const Wrapper = ({ children, colWidth }) => (
  <Container>
    <Row className="p-3">
      <Col sm={colWidth}>
        {children}
      </Col>
    </Row>
  </Container>
)

storiesOf('Elements', module)
  .add('listing card', () => (
    <MemoryRouter>
      <Container>
        <Wrapper colWidth={3}>
          <CharacterCard
            item={item}
            onSelectItem={action('Selected card')}
          />
        </Wrapper>
        <p>Story card that is shown in the characters listing on landing and search pages</p>
      </Container>
    </MemoryRouter>
  ), { notes: 'Story card that is shown in the characters listing on landing and search pages' })
  .add('character detail', () => (
    <Container>
      <Wrapper colWidth={12}>
        <CharacterDetail
          detail={item}
          loadDetail={(id) => {/**/}}
          match={{params: {id: 1}}}
          history={{}}
          isFetching={false}
        />
      </Wrapper>
      <p>Story detail page with all character details</p>
    </Container>
  ))
  .add('character detail while loading', () => (
    <Container>
      <Wrapper colWidth={12}>
        <CharacterDetail
          detail={item}
          loadDetail={(id) => {/**/}}
          match={{params: {id: 1}}}
          history={{}}
          isFetching={true}
        />
      </Wrapper>
      <p>Story detail page with loading icon</p>
    </Container>
  ))
  .add('character listing', () => (
    <Container>
      <Wrapper colWidth={12}>
        <MemoryRouter>
          <CharacterList items={items} />
        </MemoryRouter>
      </Wrapper>
      <p>Showing multiple character cards</p>
    </Container>
  ))
  .add('multiple character details', () => (
    <Container>
      <Wrapper colWidth={12}>
        <MultiCharacters
          characters={items}
          loadDetails={(ids) => {/**/}}
          match={{params: {ids: '1, 183'}}}
          history={{}}
          isFetching={false}
        />
      </Wrapper>
      <p>Showing multiple character details</p>
    </Container>
  ))
  .add('character listing pagination buttons', () => (
    <Container>
      <Wrapper colWidth={12}>
        <Pagination current={1} total={3} onClickItem={action('Clicked pagination button')} />
        <Pagination current={1} total={10} onClickItem={action('Clicked pagination button')} />
        <Pagination current={3} total={10} onClickItem={action('Clicked pagination button')} />
        <Pagination current={10} total={10} onClickItem={action('Clicked pagination button')} />
      </Wrapper>
      <p>Showing pagination buttons</p>
    </Container>
  ))
  .add('header', () => (
    <MemoryRouter>
      <Container>
        <Wrapper colWidth={12}>
          <Header  />
        </Wrapper>
        <p>Showing common header</p>
      </Container>
    </MemoryRouter>
  ))
