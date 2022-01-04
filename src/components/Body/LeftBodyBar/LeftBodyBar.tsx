import React from "react";
import style from "./LeftBodyBar.module.scss"
import followersImage from "images/Followers.svg"
import followerImage from "images/Follower.svg"
import {useSelector} from "react-redux";
import {getUser} from "store/selectors";
import {formatCount} from "utils/changeNumbersFollower";


export const LeftBodyBar = React.memo(() => {

	const user = useSelector(getUser)

	const {
		followers,
		following,
		name,
		login,
		avatar_url} = user

	return (
		<div className={style.leftBody}>
			<div className={style.imageWrapper}>
				<img alt={"avatar"}
						 src={avatar_url}/>
			</div>
			<div>
				<h2 className={style.title}>{name}</h2>
				<div className={style.text}>{login}</div>
				<div className={style.followerBlock}>
					<div className={style.follower}>
						<div className={style.iconsFollowersWrapper}>
							<img alt={"followers"} src={followersImage}/>
						</div>
						<p className={style.followerWrapper}>{`${formatCount(followers)} followers`}</p>
					</div>
					<div className={style.follower}>
						<div className={style.iconsFollowerWrapper}>
							<img alt={"follower"} src={followerImage}/>
						</div>
						<p className={style.followerWrapper}>{`${formatCount(following)} following`}</p>
					</div>
				</div>
			</div>
		</div>
	)
})