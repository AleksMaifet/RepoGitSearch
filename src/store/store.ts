import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {appReducer} from "reducers/appReducer";
import createSagaMiddleware from 'redux-saga'
import {mySagaWatcher} from "reducers/sagaActions";

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
	app: appReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware))

export type AppStoreType = ReturnType<typeof reducers>

sagaMiddleware.run(mySaga)

function* mySaga() {
	yield mySagaWatcher()
}

//@ts-ignore

window.store = store