import React from "react";
import loopImage from "images/Loop.svg"
import style from "./StartPage.module.scss"


export const StartPage = () => {

	const startPageText = 'Start with searching a GitHub user'

	return (
		<div className={style.startBlock}>
			<div>
				<div className={style.imageWrapper}>
					<img alt={"image"} src={loopImage}/>
				</div>
				<div>
					<p className={style.startBlockText}>{startPageText}</p>
				</div>
			</div>
		</div>
	)
}
