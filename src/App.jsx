import React from "react";
import "./app.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import {HOME_ROUTE} from "./utils/constants/routes";
import HomePage from "./views/Home/HomePage/HomePage";

const App = () => {
	return (
		<BrowserRouter>
			<Dashboard>
				<Routes>
					<Route path={HOME_ROUTE} element={<HomePage />} />
					<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
				</Routes>
			</Dashboard>
		</BrowserRouter>
	);
};

export default App;
