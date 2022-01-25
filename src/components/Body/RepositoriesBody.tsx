import React, {useEffect} from "react";
import {CircularIndeterminate, LeftBodyBar, RightBodyBar} from "components";
import style from "./Body.module.scss"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getApp, getPage} from "store/selectors";
import {UserNotFoundPage} from "components/Pages/UserNotFoundPage/UserNotFoundPage";
import {getUserRepo, getUserSage} from "reducers/sagaActions";


export const RepositoriesBody = () => {
	const dispatch = useDispatch()

	const isLoad = useSelector(getApp).isLoad
	const isFound = useSelector(getApp).isFoundUser
	const page = useSelector(getPage)

	const {userName} = useParams<'userName'>()


	useEffect(() => {
		userName && dispatch(getUserSage(userName))
	}, [dispatch, userName])

	useEffect(() => {
		userName && dispatch(getUserRepo(userName, page))
	}, [dispatch, page, userName])

	if (isLoad === "loading") {
		return <CircularIndeterminate/>
	}
	if (!isFound) return <UserNotFoundPage/>


	return (
		<div className={style.RepositoriesContainer}>
			<div className={style.RepositoriesBody}>
				<LeftBodyBar/>
				<RightBodyBar/>
			</div>
		</div>
	)
}