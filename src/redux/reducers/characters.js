import {
  MC_CHARACTERS_REQUEST,
  MC_CHARACTERS_SUCCESS,
  MC_CHARACTERS_ERROR,
} from '../actions/characters'

const initialState = {
  results: [],
  info: {},
  isFetching: false,
  isError: false,
  errorMsg: '',
}

const characters = (state = initialState, action) => {
  if (action.itemType !== 'characters') {
    return state
  }
  switch (action.type) {
    case MC_CHARACTERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        errorMsg: '',
      })
    case MC_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.payload.info,
        results: action.payload.results,
      })
    case MC_CHARACTERS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMsg: action.error,
      })
    default:
      return state
  }
}

export default characters
