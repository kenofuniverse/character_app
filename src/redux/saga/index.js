import { put, takeLatest, all, call } from 'redux-saga/effects'
import { getCharacter } from 'rickmortyapi'
import {
  MC_CHARACTERS_REQUEST,
  charactersSuccess,
  charactersError
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

function* actionWatcher() {
  yield takeLatest(MC_CHARACTERS_REQUEST, fetchCharacters)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ])
}
