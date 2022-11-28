import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterLogin from "../pages/RegisterLogin";

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/login' element={<RegisterLogin />} />
			<Route path='/register' element={<RegisterLogin />} />
			<Route path='*' element={<div>404</div>} />
		</Routes>
	);
};

export default Router;
