import { Button, Input, Text } from "@nextui-org/react";
import styles from "./AccessForm.module.css";
import { NavLink } from "react-router-dom";
import { post } from "../../services";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../contexts/UserProvider";

const AccessForm = ({ isLogin }) => {
	const navigate = useNavigate();
	const [userContext, setUserContext] = useMyContext();

	const [user, setUser] = useState({
		email: "",
		password: "",
		name: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleRegistrar = async (e) => {
		e.preventDefault();
		const res = await post("/users/signup", user);
		console.log(res);
		if (res.ok) {
			toast.success("Usuario registrado con éxito");
			navigate("/login");
		} else {
			toast.error("Error al crear usuario");
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const res = await post("/users/login", user);
		console.log(res);
		if (res.ok) {
			toast.success("Usuario logeado con éxito");
			setUserContext(res.data);
			navigate("/");
		} else {
			toast.error("Usuario o contraseña incorrectos");
		}
	};

	useEffect(() => {
		isLogin
			? setUser({
					email: "",
					password: "",
					name: "",
			  })
			: setUser({
					email: "",
					password: "",
					name: "",
			  });
	}, [isLogin]);

	return (
		<form
			className={styles.formCard}
			onSubmit={isLogin ? handleLogin : handleRegistrar}
		>
			<Button
				onPress={() => {
					navigate("/");
				}}
				className='closeFormBtn'
				auto
			>
				<div className='linea linea1'></div>
				<div className='linea linea2'></div>
			</Button>
			<Text className={styles.titulo} b>
				{isLogin ? "Iniciar Sesión" : "Registrate!"}
			</Text>
			{isLogin ? (
				<div className={styles.form}>
					<div className={styles.formGroup}>
						<Input
							required
							type={"email"}
							name='email'
							id='email'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Correo Electrónico'
							onChange={handleChange}
							value={user.email}
						/>
						<Input
							required
							type={"password"}
							name='password'
							id='password'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Contraseña'
							onChange={handleChange}
							value={user.password}
						/>
					</div>
					<Button
						type='submit'
						color={"gradient"}
						className={styles.enviarBtn}
					>
						Iniciar Sesión
					</Button>
					<NavLink className={styles.navilink} to='/register'>
						No tienes cuenta mano?
					</NavLink>
				</div>
			) : (
				<div className={styles.form}>
					<div className={styles.formGroup}>
						<Input
							required
							type='text'
							name='name'
							id='name'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Nombre'
							onChange={handleChange}
							value={user.name}
						/>
						<Input
							required
							type={"email"}
							name='email'
							id='email'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Correo Electrónico'
							onChange={handleChange}
							value={user.email}
						/>
						<Input
							required
							type={"password"}
							name='password'
							id='password'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Contraseña'
							onChange={handleChange}
							value={user.password}
						/>
						{/* <Input
						required
							type={"password"}
							name='password'
							id='password'
							bordered
							size='sm'
							color='primary'
							fullWidth
							labelPlaceholder='Repetir Contraseña'
						/> */}
					</div>
					<Button
						type='submit'
						color={"gradient"}
						className={styles.enviarBtn}
					>
						Registrarse
					</Button>
					<NavLink className={styles.navilink} to='/login'>
						Ya tienes cuenta causa?
					</NavLink>
				</div>
			)}
		</form>
	);
};

export default AccessForm;
