import React from "react";
import UserImage from "../../../images/Users.svg"
import style from "./UserNotFoundPage.module.scss"


export const UserNotFoundPage = () => {

	const userNotFoundPageText = 'User not found'

	return (
		<div className={style.foundBlock}>
			<div>
				<div className={style.imageWrapper}>
					<img alt={"image"} src={UserImage}/>
				</div>
				<div>
					<p className={style.foundBlockText}>{userNotFoundPageText}</p>
				</div>
			</div>
		</div>
	)
}
