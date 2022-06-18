import React from "react";
import Typography from "@mui/material/Typography";

const Title = ({children}) => (
	<Typography component="h2" variant="h6" color="primary" gutterBottom>
		{children}
	</Typography>
);

export default Title;
