import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import SuperInputText from "components";


export const SearchComponent = () => {
	const navigate = useNavigate()

	const location = useLocation()
	const searchValue = location.pathname.split('/')[2]

	const [valueSearch,setValueSearch] = useState<string>('')



	useEffect(() => {
			searchValue.length ? setValueSearch(searchValue) : setValueSearch('')
	}, [searchValue])


	const enterValueSearch = () => {
		navigate(`user/${valueSearch}`)
	}

	return (
		<>
			<SuperInputText value={valueSearch} onChangeText={setValueSearch} onEnter={enterValueSearch}/>
		</>
	)
}

