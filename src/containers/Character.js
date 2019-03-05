import { connect } from 'react-redux'
import { characterDetailRequest } from '../redux/actions/characters'
import CharacterDetail from '../components/CharacterDetail'

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.characterDetail.detail,
    isFetching: state.characterDetail.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadDetail: id => {
      dispatch(characterDetailRequest(id))
    }
  }
}

const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetail)

export default CharacterContainer
