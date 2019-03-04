import React from 'react'
import PropTypes from 'prop-types'
import {
  CardColumns
} from 'react-bootstrap'
import CharacterCard from './CharacterCard'

const CharacterList = (items) => (
  <CardColumns>
    { items.map((item, index) => (
      <CharacterCard
        key={index}
        item={item}
      />
    )) }
  </CardColumns>
)

CharacterList.defaultProps = {
  items: []
}

CharacterList.propTypes = {
  items: PropTypes.array
}

export default CharacterList
