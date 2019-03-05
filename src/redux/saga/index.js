import { put, takeLatest, all, call } from 'redux-saga/effects'
import { getCharacter } from 'rickmortyapi'
import {
  MC_CHARACTERS_REQUEST,
  MC_CHARACTER_DETAIL_REQUEST,
  charactersSuccess,
  charactersError,
  characterDetailSuccess,
  characterDetailError,
} from '../actions/characters'

function* fetchCharacters(action) {
  try {
    const response = yield call(getCharacter, { page: action.page })
    yield put(charactersSuccess(response))
  }
  catch (e) {
    yield put(charactersError(e.errorMessage))
  }
}

function* actionCharactersWatcher() {
  yield takeLatest(MC_CHARACTERS_REQUEST, fetchCharacters)
}

function* fetchCharacterDetail(action) {
  try {
    const response = yield call(getCharacter, parseInt(action.id))
    yield put(characterDetailSuccess(response))
  }
  catch (e) {
    yield put(characterDetailError(e.errorMessage))
  }
}

function* actionCharacterDetailWatcher() {
  yield takeLatest(MC_CHARACTER_DETAIL_REQUEST, fetchCharacterDetail)
}

export default function* rootSaga() {
  yield all([
    actionCharactersWatcher(),
    actionCharacterDetailWatcher(),
  ])
}
