import {RepositoryType, UserType} from "apiRequests/apiReps";
import {IsLoadType} from "types/type";


export type initStateType = typeof initState

const initState = {
	user: {} as UserType,
	repository: [] as RepositoryType[],
	isLoad: 'idle' as IsLoadType,
	isFoundUser: true,
	page: 1,
	per_page: 4,
}

export const appReducer = (state = initState, action: AppActionHandlerType): initStateType => {
	switch (action.type) {
		case "GET-USER":
			return {
				...state,
				user: action.user
			}
		case "GET-USER-REPO":
			return {
				...state,
				repository: action.repository
			}
		case "SET-SEARCH-VALUE":
		case "IS-LOADING":
		case "IS-NOT-FOUND":
		case "SET-NEW-PAGE":
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

type AppActionHandlerType =
	ReturnType<typeof getUserAC>
	| ReturnType<typeof getUserRepoAC>
	| ReturnType<typeof setSearchValueAC>
	| ReturnType<typeof isLoadingAC>
	| ReturnType<typeof isFoundUserAC>
	| ReturnType<typeof setNewPageAC>

export const getUserAC = (user: UserType) => {
	return {
		type: "GET-USER",
		user,
	} as const
}
export const getUserRepoAC = (repository: RepositoryType []) => {
	return {
		type: "GET-USER-REPO",
		repository,
	} as const
}
export const setSearchValueAC = (userName: string) => {
	return {
		type: "SET-SEARCH-VALUE",
		payload: {
			userName,
		},
	} as const
}
export const isLoadingAC = (isLoad: IsLoadType) => {
	return {
		type: "IS-LOADING",
		payload: {
			isLoad,
		},
	} as const
}
export const isFoundUserAC = (isFoundUser: boolean) => {
	return {
		type: "IS-NOT-FOUND",
		payload: {
			isFoundUser,
		}
	} as const
}

export const setNewPageAC = (page: number) => {
	return {
		type: "SET-NEW-PAGE",
		payload: {
			page,
		}
	} as const
}

