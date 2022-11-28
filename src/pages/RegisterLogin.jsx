import { useMatch } from "react-router-dom";
import AccessForm from "../components/AccessForm";

const RegisterLogin = () => {
	const isLogin = useMatch("/login");

	return (
		<div className='loginRegister_wrapper'>
			<AccessForm isLogin={isLogin} />
		</div>
	);
};

export default RegisterLogin;
