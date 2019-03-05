export const MC_CHARACTERS_REQUEST = 'MC_CHARACTERS_REQUEST'
export const MC_CHARACTERS_SUCCESS = 'MC_CHARACTERS_SUCCESS'
export const MC_CHARACTERS_ERROR = 'MC_CHARACTERS_ERROR'
export const MC_MULTI_CHARACTERS_REQUEST = 'MC_MULTI_CHARACTERS_REQUEST'
export const MC_MULTI_CHARACTERS_SUCCESS = 'MC_MULTI_CHARACTERS_SUCCESS'
export const MC_MULTI_CHARACTERS_ERROR = 'MC_MULTI_CHARACTERS_ERROR'
export const MC_CHARACTER_DETAIL_REQUEST = 'MC_CHARACTER_DETAIL_REQUEST'
export const MC_CHARACTER_DETAIL_SUCCESS = 'MC_CHARACTER_DETAIL_SUCCESS'
export const MC_CHARACTER_DETAIL_ERROR = 'MC_CHARACTER_DETAIL_ERROR'
export const MC_SEARCH_REQUEST = 'MC_SEARCH_REQUEST'
export const MC_SEARCH_SUCCESS = 'MC_SEARCH_SUCCESS'
export const MC_SEARCH_ERROR = 'MC_SEARCH_ERROR'

export const charactersRequest = (page) => ({
  type: MC_CHARACTERS_REQUEST,
  itemType: 'characters',
  page
})

export const charactersSuccess = payload => ({
  type: MC_CHARACTERS_SUCCESS,
  itemType: 'characters',
  payload,
})

export const charactersError = error => ({
  type: MC_CHARACTERS_ERROR,
  itemType: 'characters',
  error,
})

export const multiCharactersRequest = (ids) => ({
  type: MC_MULTI_CHARACTERS_REQUEST,
  itemType: 'multi_characters',
  ids
})

export const multiCharactersSuccess = payload => ({
  type: MC_MULTI_CHARACTERS_SUCCESS,
  itemType: 'multi_characters',
  payload,
})

export const multiCharactersError = error => ({
  type: MC_MULTI_CHARACTERS_ERROR,
  itemType: 'multi_characters',
  error,
})

export const characterDetailRequest = (id) => ({
  type: MC_CHARACTER_DETAIL_REQUEST,
  itemType: 'character_detail',
  id
})

export const characterDetailSuccess = payload => ({
  type: MC_CHARACTER_DETAIL_SUCCESS,
  itemType: 'character_detail',
  payload,
})

export const characterDetailError = error => ({
  type: MC_CHARACTER_DETAIL_ERROR,
  itemType: 'character_detail',
  error,
})

export const searchRequest = (keyword, page) => ({
  type: MC_SEARCH_REQUEST,
  itemType: 'search',
  keyword,
  page
})

export const searchSuccess = payload => ({
  type: MC_SEARCH_SUCCESS,
  itemType: 'search',
  payload,
})

export const searchError = error => ({
  type: MC_SEARCH_ERROR,
  itemType: 'search',
  error,
})
