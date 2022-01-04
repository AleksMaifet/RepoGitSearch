import React, {useEffect, useState} from "react";
import {UserNotFoundPage} from "./UserNotFoundPage/UserNotFoundPage";
import {useSelector} from "react-redux";
import {notFound} from "../../store/selectors/notFound";
import {RepositoriesBody} from "../Body/RepositoriesBody";


export const InitialState = () => {
	const [page, setPage] = useState<boolean>(true)
	const isFoundUser = useSelector(notFound)

	useEffect(() => {
		setPage(isFoundUser)
	}, [isFoundUser])

	return (
		<>
			{page ?
				<RepositoriesBody/>
				:
				<UserNotFoundPage/>
			}
		</>
	)
}