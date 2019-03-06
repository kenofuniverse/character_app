import * as actions from '../characters'

describe('Character Actions', () => {
  it('should create an action to request characters', () => {
    const expectedAction = {
      type: actions.MC_CHARACTERS_REQUEST,
      itemType: 'characters',
      page: 1
    }
    expect(actions.charactersRequest(1)).toEqual(expectedAction)
  })

  it('should create an action to request character detail', () => {
    const expectedAction = {
      type: actions.MC_CHARACTER_DETAIL_REQUEST,
      itemType: 'character_detail',
      id: 1
    }
    expect(actions.characterDetailRequest(1)).toEqual(expectedAction)
  })

  it('should create an action to request multiple characters', () => {
    const expectedAction = {
      type: actions.MC_MULTI_CHARACTERS_REQUEST,
      itemType: 'multi_characters',
      ids: [1, 23]
    }
    expect(actions.multiCharactersRequest([1, 23])).toEqual(expectedAction)
  })

  it('should create an action to search characters', () => {
    const expectedAction = {
      type: actions.MC_SEARCH_REQUEST,
      itemType: 'search',
      keyword: 'anything',
      page: 1
    }
    expect(actions.searchRequest('anything', 1)).toEqual(expectedAction)
  })
})
