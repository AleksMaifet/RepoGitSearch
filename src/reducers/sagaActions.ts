import {getUserAC, getUserRepoAC, initStateType, isFoundUserAC, isLoadingAC} from "reducers/appReducer";
import {call, put, select, takeEvery} from 'redux-saga/effects'
import {apiUsers} from "apiRequests/apiReps";
import {getApp} from "store/selectors";

function* getUserWorkerSaga(action: {
	type: 'GET-USER-SAGA'
	userName: string
}) {
	const {userName} = action
	yield put(isLoadingAC('loading'))
	yield put(isFoundUserAC(true))
	try {
		const {data} = yield call(apiUsers.getUser, userName)
		yield put(getUserAC(data))
	} catch (e: any) {
		yield put(isFoundUserAC(false))
	} finally {
		yield put(isLoadingAC('success'))
	}
}

function* getUserRepoWorkerSaga(action: {
	type: "GET-USER-REPO-SAGA"
	params: {
		userName: string,
		page: number,
	}
}) {
	const state: initStateType = yield select(getApp);
	const {per_page} = state
	const {userName, page} = action.params
	const params = {
		userName,
		page,
		per_page
	}
	try {
		const {data} = yield call(apiUsers.getUserRepo, params)
		yield put(getUserRepoAC(data))
	} catch (e) {
		yield put(isFoundUserAC(false))
	}
}

export const getUserSage = (userName: string) => ({type: 'GET-USER-SAGA', userName})
export const getUserRepo = (userName: string, page: number,) => ({
	type: "GET-USER-REPO-SAGA",
	params: {userName, page}
})


export function* mySagaWatcher() {
	yield takeEvery("GET-USER-SAGA", getUserWorkerSaga)
	yield takeEvery("GET-USER-REPO-SAGA", getUserRepoWorkerSaga)
}