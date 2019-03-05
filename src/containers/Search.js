import { connect } from 'react-redux'
import { searchRequest } from '../redux/actions/characters'
import Search from '../components/Search'

const mapStateToProps = (state, ownProps) => {
  return {
    characterList: state.search.results,
    pageInfo: state.search.info,
    isFetching: state.search.isFetching,
    isError: state.search.isError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchCharacters: (keyword, page) => {
      dispatch(searchRequest(keyword, page))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer
