import search from '../search'
import * as actions from '../../actions/characters'

describe('Character Search reducer', () => {
  it('should return initial state', () => {
    expect(search(undefined, {})).toEqual(
      {
        results: [],
        info: {},
        isFetching: false,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_SEARCH_REQUEST', () => {
    expect(search({}, {
      type: actions.MC_SEARCH_REQUEST,
      itemType: 'search',
      id: 1
    })).toEqual(
      {
        isFetching: true,
        isError: false,
        errorMsg: '',
      }
    )
  })

  it('should handle MC_SEARCH_SUCCESS', () => {
    expect(search({}, {
      type: actions.MC_SEARCH_SUCCESS,
      itemType: 'search',
      payload: {
        info: 'info',
        results: 'results'
      }
    })).toEqual(
      {
        results: 'results',
        info: 'info',
        isFetching: false,
      }
    )
  })

  it('should handle MC_SEARCH_ERROR', () => {
    expect(search({}, {
      type: actions.MC_SEARCH_ERROR,
      itemType: 'search',
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
