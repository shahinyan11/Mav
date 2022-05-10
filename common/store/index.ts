import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga } from '@/sagas'
import rootReducer from '@/store/root/reducer'

const sagaMiddleware = createSagaMiddleware()
const composed = composeWithDevTools(applyMiddleware(sagaMiddleware))
export const store = createStore(rootReducer, {}, composed)
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
