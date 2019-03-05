import {
  MC_SEARCH_REQUEST,
  MC_SEARCH_SUCCESS,
  MC_SEARCH_ERROR,
} from '../actions/characters'

const initialState = {
  results: [],
  info: {},
  isFetching: false,
  isError: false,
  errorMsg: '',
}

const search = (state = initialState, action) => {
  if (action.itemType !== 'search') {
    return state
  }
  switch (action.type) {
    case MC_SEARCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        errorMsg: '',
      })
    case MC_SEARCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.payload.info,
        results: action.payload.results,
      })
    case MC_SEARCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMsg: action.error,
      })
    default:
      return state
  }
}

export default search
