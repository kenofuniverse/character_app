export const MC_CHARACTERS_REQUEST = 'MC_CHARACTERS_REQUEST'
export const MC_CHARACTERS_SUCCESS = 'MC_CHARACTERS_SUCCESS'
export const MC_CHARACTERS_ERROR = 'MC_CHARACTERS_ERROR'

export const charactersRequest = () => ({
  type: MC_CHARACTERS_REQUEST,
  itemType: 'characters',
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
