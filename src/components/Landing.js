import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout'
import CharacterList from './CharacterList'

const Landing = ({characterList, loadCharacters}) => {
  useEffect(() => {
    loadCharacters()
  }, []); // similar to componentDidMount

  return (
    <Layout>
      <CharacterList items={characterList} />
    </Layout>
  )
}

Landing.defaultProps = {
  characterList: []
}

Landing.propTypes = {
  characterList: PropTypes.array,
  loadCharacters: PropTypes.func.isRequired,
}

export default Landing
