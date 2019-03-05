import React from 'react'
import PropTypes from 'prop-types'
import { CardColumns } from 'react-bootstrap'
import CharacterCard from './CharacterCard'

const CharacterList = ({ items }) => {
  return (
    <CardColumns>
      {items.map(item => (
        <CharacterCard key={item.id} item={item} />
      ))}
    </CardColumns>
  )
}

CharacterList.defaultProps = {
  items: []
}

CharacterList.propTypes = {
  items: PropTypes.array
}

export default CharacterList
