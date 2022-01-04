import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {StartPage} from "components";
import {RepositoriesBody} from "components";


export const PATH = {
	USER_PROFILE:'/user',
	USER:'/user',
}

export const RoutesBlock = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Navigate to={PATH.USER}/>}/>
			<Route path={PATH.USER} element={<StartPage/>}/>
			<Route path={`${PATH.USER_PROFILE}/:userName`} element={<RepositoriesBody/>}/>
		</Routes>
	)
}