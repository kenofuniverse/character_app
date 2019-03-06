import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CardColumns } from 'react-bootstrap'
import { CharacterContext } from './CharacterContext'
import CharacterCard from './CharacterCard'

const CharacterList = ({ items }) => {
  const [selected, setSelected] = useContext(CharacterContext)

  const handleCheckChange = (e, item) => {
    if (e.target.checked) {
      if (selected.indexOf(item.id) === -1) {
        setSelected([...selected, item.id])
      }
    } else {
      if (selected.indexOf(item.id) > -1) {
        const index = selected.indexOf(item.id)
        const modified = [...selected]
        modified.splice(index, 1)
        setSelected(modified)
      }
    }
  }

  return (
    <CardColumns>
      {items.map(item => (
        <CharacterCard
          key={item.id}
          item={item}
          isSelected={selected.indexOf(item.id) > -1}
          onSelectItem={e => handleCheckChange(e, item)}
        />
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
