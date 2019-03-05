import {
  MC_CHARACTER_DETAIL_REQUEST,
  MC_CHARACTER_DETAIL_SUCCESS,
  MC_CHARACTER_DETAIL_ERROR,
} from '../actions/characters'

const initialState = {
  detail: {},
  isFetching: false,
  isError: false,
  errorMsg: '',
}

const characterDetail = (state = initialState, action) => {
  if (action.itemType !== 'character_detail') {
    return state
  }
  switch (action.type) {
    case MC_CHARACTER_DETAIL_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        errorMsg: '',
      })
    case MC_CHARACTER_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        detail: action.payload,
      })
    case MC_CHARACTER_DETAIL_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        errorMsg: action.error,
      })
    default:
      return state
  }
}

export default characterDetail
