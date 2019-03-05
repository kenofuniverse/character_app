export const MC_CHARACTERS_REQUEST = 'MC_CHARACTERS_REQUEST'
export const MC_CHARACTERS_SUCCESS = 'MC_CHARACTERS_SUCCESS'
export const MC_CHARACTERS_ERROR = 'MC_CHARACTERS_ERROR'
export const MC_CHARACTER_DETAIL_REQUEST = 'MC_CHARACTER_DETAIL_REQUEST'
export const MC_CHARACTER_DETAIL_SUCCESS = 'MC_CHARACTER_DETAIL_SUCCESS'
export const MC_CHARACTER_DETAIL_ERROR = 'MC_CHARACTER_DETAIL_ERROR'

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
