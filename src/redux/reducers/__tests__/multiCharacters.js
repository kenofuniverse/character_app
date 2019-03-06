import multiCharacters from '../multiCharacters'
import * as actions from '../../actions/characters'

describe('Multi Characters reducer', () => {
  it('should return initial state', () => {
    expect(multiCharacters(undefined, {})).toEqual(
      {
        results: [],
        isFetching: false,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_MULTI_CHARACTERS_REQUEST', () => {
    expect(multiCharacters({}, {
      type: actions.MC_MULTI_CHARACTERS_REQUEST,
      itemType: 'multi_characters',
      id: 1
    })).toEqual(
      {
        isFetching: true,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_MULTI_CHARACTERS_SUCCESS', () => {
    expect(multiCharacters({}, {
      type: actions.MC_MULTI_CHARACTERS_SUCCESS,
      itemType: 'multi_characters',
      payload: 'anything'
    })).toEqual(
      {
        results: 'anything',
        isFetching: false,
      }
    )
  })

  it('should handle MC_MULTI_CHARACTERS_ERROR', () => {
    expect(multiCharacters({}, {
      type: actions.MC_MULTI_CHARACTERS_ERROR,
      itemType: 'multi_characters',
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
