import axios from "axios";


export type UserType = {
	avatar_url: string
	created_at: string
	followers: number
	following: number
	id: number
	login: string
	name: string
	public_repos: number
}

export type RepositoryType = {
	html_url: string
	id: number
	language: string
	name: string
	full_name:string
}

export type RepositoriesCommitType = {
	commit:{
		message:string
	}
}

const initial = axios.create(
	{
		baseURL:"https://api.github.com/users/",
	}
)

export const apiUsers = {
	getUser(userName: string) {
		return initial.get<UserType>(`${userName}`, {},)
	},
	getUserRepo(params: {
		userName: string,
		page: number,
		per_page: number
	}) {
		const userName = params.userName
		return initial.get<RepositoryType[]>(`${userName}/repos`, {
			params
		})
	},
}