import React, {ChangeEvent} from "react";
import {Stack} from "@material-ui/core";
import Pagination from "@material-ui/core/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../store/selectors/getUser";
import {getApp} from "../../store/selectors/getApp";
import {paginationFunction} from "../../utils/paginationFunction";
import {setNewPageAC} from "../../reducers/appReducer";


export const PaginationPage = () => {
	const dispatch = useDispatch()


	const user = useSelector(getUser)
	const {public_repos} = user
	const per_page = useSelector(getApp).per_page
	const page = useSelector(getApp).page


	const PageCount = paginationFunction(public_repos,per_page)


	const paginationStyleBlock = {
		display:'flex',
		justifyContent:'end',
	}

	const handleChange = (event: ChangeEvent<unknown>, value: number) => {
		dispatch(setNewPageAC(value))
	};

	return (
		<div style={paginationStyleBlock}>
			<Stack>
				<Pagination
					onChange={handleChange}
					color="primary"
					count={PageCount || 0}
					shape="rounded"
					page={page}
				/>
			</Stack>
		</div>
	)
}