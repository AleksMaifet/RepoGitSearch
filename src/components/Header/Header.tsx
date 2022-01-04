import React from "react";
import gitLogo from "images/Git_logo.svg"
import style from './Header.module.scss'
import {SearchComponent} from "components";
import {useNavigate} from "react-router-dom";


export const Header = () => {
	const navigate = useNavigate()


	const backToStartPage = () => {
		navigate(`user/`)
	}


	return (
		<div className={style.gitHeader}>
			<div className={style.gitBlock}>
				<div onClick={backToStartPage} className={style.gitLogoWrapper}>
					<img src={gitLogo} alt={"Logo"}/>
				</div>
				<div className={style.gitSearchWrapper}>
					<SearchComponent/>
				</div>
			</div>
		</div>
	)
}