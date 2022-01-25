import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import SuperInputText from "components";
import {useDispatch} from "react-redux";
import {setNewPageAC} from "reducers/appReducer";


export const SearchComponent = () => {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const location = useLocation()
	const searchValue = location.pathname.split('/')[2]

	const [valueSearch, setValueSearch] = useState<string>('')

	useEffect(() => {
		searchValue ? setValueSearch(searchValue) : setValueSearch('')
	}, [dispatch, searchValue])

	const enterValueSearch = () => {
		navigate(`user/${valueSearch}`)
		dispatch(setNewPageAC(1))
	}

	return (
		<>
			<SuperInputText value={valueSearch} onChangeText={setValueSearch} onEnter={enterValueSearch}/>
		</>
	)
}

