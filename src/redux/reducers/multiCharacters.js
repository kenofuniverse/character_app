import {
  MC_MULTI_CHARACTERS_REQUEST,
  MC_MULTI_CHARACTERS_SUCCESS,
  MC_MULTI_CHARACTERS_ERROR,
} from '../actions/characters'

const initialState = {
  results: [],
  isFetching: false,
  isError: false,
  errorMsg: '',
}

const multiCharacters = (state = initialState, action) => {
  if (action.itemType !== 'multi_characters') {
    return state
  }
  switch (action.type) {
    case MC_MULTI_CHARACTERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        errorMsg: '',
      })
    case MC_MULTI_CHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.payload,
      })
    case MC_MULTI_CHARACTERS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMsg: action.error,
      })
    default:
      return state
  }
}

export default multiCharacters
