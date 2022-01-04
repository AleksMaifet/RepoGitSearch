import React from "react";
import style from "./RightBodyBar.module.scss"
import {useSelector} from "react-redux";
import {getUser} from "store/selectors";
import {getUserRepo} from "store/selectors";
import {PaginationPage} from "components";
import {RepoEmpty} from "components";
import {getApp} from "store/selectors";


export const RightBodyBar = React.memo(() => {
	const user = useSelector(getUser)
	const userRepo = useSelector(getUserRepo)
	const isRepoEmpty = useSelector(getApp).user.public_repos


	if (isRepoEmpty <= 0) return <RepoEmpty/>


	return (
		<div>
			<div style={{height: '520px'}}>
				<div className={style.repositoriesTitle}>
					{`Repositories (${user.public_repos})`}
				</div>
				{userRepo.map(el => {
					return (
						<div key={el.id} className={style.repositoriesTextWrapper}>
							<div className={style.repositoriesText}>
								<a target={"_blank"} href={el.html_url}>{el.name}</a>
							</div>
						</div>
					)
				})}
			</div>
			<PaginationPage/>
		</div>
	)
})