import characters from '../characters'
import * as actions from '../../actions/characters'

describe('Characters reducer', () => {
  it('should return initial state', () => {
    expect(characters(undefined, {})).toEqual(
      {
        results: [],
        info: {},
        isFetching: false,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_CHARACTERS_REQUEST', () => {
    expect(characters({}, {
      type: actions.MC_CHARACTERS_REQUEST,
      itemType: 'characters',
      id: 1
    })).toEqual(
      {
        isFetching: true,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_CHARACTERS_SUCCESS', () => {
    expect(characters({}, {
      type: actions.MC_CHARACTERS_SUCCESS,
      itemType: 'characters',
      payload: {
        info: 'info',
        results: 'results'
      }
    })).toEqual(
      {
        isFetching: false,
        info: 'info',
        results: 'results'
      }
    )
  })

  it('should handle MC_CHARACTERS_ERROR', () => {
    expect(characters({}, {
      type: actions.MC_CHARACTERS_ERROR,
      itemType: 'characters',
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
