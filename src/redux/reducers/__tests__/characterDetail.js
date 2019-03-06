import characterDetail from '../characterDetail'
import * as actions from '../../actions/characters'

describe('Character Detail reducer', () => {
  it('should return initial state', () => {
    expect(characterDetail(undefined, {})).toEqual(
      {
        detail: {},
        isFetching: false,
        isError: false,
        errorMsg: ''
      }
    )
  })

  it('should handle MC_CHARACTER_DETAIL_REQUEST', () => {
    expect(characterDetail({}, {
      type: actions.MC_CHARACTER_DETAIL_REQUEST,
      itemType: 'character_detail',
      id: 1
    })).toEqual(
      {
        isFetching: true,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_CHARACTER_DETAIL_SUCCESS', () => {
    expect(characterDetail({}, {
      type: actions.MC_CHARACTER_DETAIL_SUCCESS,
      itemType: 'character_detail',
      payload: 'anything'
    })).toEqual(
      {
        detail: 'anything',
        isFetching: false,
      }
    )
  })

  it('should handle MC_CHARACTER_DETAIL_ERROR', () => {
    expect(characterDetail({}, {
      type: actions.MC_CHARACTER_DETAIL_ERROR,
      itemType: 'character_detail',
      error: 'error'
    })).toEqual(
      {
        isFetching: false,
        isError: true,
        errorMsg: 'error',
      }
    )
  })
})
