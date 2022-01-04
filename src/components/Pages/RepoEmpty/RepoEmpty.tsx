import React from "react";
import style from "./RepoEmpty.module.scss";
import EmptySquare from "../../../images/EmptySquare.svg";


export const RepoEmpty = () => {
	const RepoEmptyText = 'Repository list is empty'
	return (
		<div className={style.foundBlock}>
			<div>
				<div className={style.imageWrapper}>
					<img alt={"image"} src={EmptySquare}/>
				</div>
				<div>
					<p className={style.foundBlockText}>{RepoEmptyText}</p>
				</div>
			</div>
		</div>
	)
}