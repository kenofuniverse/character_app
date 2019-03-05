import { connect } from 'react-redux'
import { charactersRequest } from '../redux/actions/characters'
import Landing from '../components/Landing'

const mapStateToProps = (state, ownProps) => {
  return {
    characterList: state.characters.results,
    pageInfo: state.characters.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCharacters: page => {
      dispatch(charactersRequest(page))
    }
  }
}

const LandingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)

export default LandingContainer
