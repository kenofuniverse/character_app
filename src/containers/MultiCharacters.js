import { connect } from 'react-redux'
import { multiCharactersRequest } from '../redux/actions/characters'
import MultiCharacters from '../components/MultiCharacters'

const mapStateToProps = (state, ownProps) => {
  return {
    characters: state.multiCharacters.results,
    isFetching: state.multiCharacters.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadDetails: id => {
      dispatch(multiCharactersRequest(id))
    }
  }
}

const MultiCharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiCharacters)

export default MultiCharactersContainer
