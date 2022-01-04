import React, {useEffect} from "react";
import {LeftBodyBar} from "components";
import {RightBodyBar} from "components";
import style from "./Body.module.scss"
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserTC} from "reducers/appReducer";
import {getPage} from "store/selectors";
import {CircularIndeterminate} from "components";
import {UserNotFoundPage} from "components/Pages/UserNotFoundPage/UserNotFoundPage";
import {getApp} from "store/selectors";

export const RepositoriesBody = () => {
	const dispatch = useDispatch()

	const isLoad = useSelector(getApp).isLoad
	const isFound = useSelector(getApp).isFoundUser
	const page = useSelector(getPage)

	const {userName} = useParams<'userName'>()


	useEffect(() => {
		userName && dispatch(getUserTC(userName))
	}, [dispatch, page, userName])


	if (isLoad === "loading") {
		return <CircularIndeterminate/>
	}
	if(!isFound) return <UserNotFoundPage/>


	return (
		<div className={style.RepositoriesContainer}>
			<div className={style.RepositoriesBody}>
				<LeftBodyBar/>
				<RightBodyBar/>
			</div>
		</div>
	)
}