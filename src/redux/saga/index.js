import { put, takeLatest, all, call } from 'redux-saga/effects'
import { getCharacter } from 'rickmortyapi'
import {
  MC_CHARACTERS_REQUEST,
  MC_CHARACTER_DETAIL_REQUEST,
  MC_SEARCH_REQUEST,
  MC_MULTI_CHARACTERS_REQUEST,
  charactersSuccess,
  charactersError,
  characterDetailSuccess,
  characterDetailError,
  searchSuccess,
  searchError,
  multiCharactersError,
  multiCharactersSuccess
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

function* fetchSearch(action) {
  try {
    const response = yield call(getCharacter, { name: action.keyword, page: action.page })
    yield put(searchSuccess(response))
  }
  catch (e) {
    yield put(searchError(e.errorMessage))
  }
}

function* actionSearchWatcher() {
  yield takeLatest(MC_SEARCH_REQUEST, fetchSearch)
}

function* fetchMultiChracters(action) {
  try {
    const response = yield call(getCharacter, action.ids)
    yield put(multiCharactersSuccess(response))
  }
  catch (e) {
    yield put(multiCharactersError(e.errorMessage))
  }
}

function* actionMultiCharactersWatcher() {
  yield takeLatest(MC_MULTI_CHARACTERS_REQUEST, fetchMultiChracters)
}

export default function* rootSaga() {
  yield all([
    actionCharactersWatcher(),
    actionCharacterDetailWatcher(),
    actionSearchWatcher(),
    actionMultiCharactersWatcher(),
  ])
}
