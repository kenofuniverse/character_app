import React from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout'
import CharacterList from './CharacterList'

const Landing = ({characterList}) => (
  <Layout>
    <CharacterList items={characterList} />
  </Layout>
)

Landing.defaultProps = {
  characterList: []
}

Landing.propTypes = {
  characterList: PropTypes.array
}

export default Landing
