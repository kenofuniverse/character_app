import configureStore from './configureStore'
import rootSaga from './saga'

const store = configureStore({})
store.runSaga(rootSaga)

export default store
