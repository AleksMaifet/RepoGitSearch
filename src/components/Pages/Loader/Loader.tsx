import React from "react";
import {Box, CircularProgress} from "@material-ui/core";






export const CircularIndeterminate = () => {
	return (
		<Box sx={
			{ display: "flex",
				minHeight:"80vh",
				justifyContent:"center",
				alignItems:"center",
			}}>
			<CircularProgress />
		</Box>
	);
}