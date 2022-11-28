import { Button, Text } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../contexts/UserProvider";
import { useState } from "react";

const Header = () => {
	const [user, setUser] = useMyContext();
	const navigate = useNavigate();

	const [menuPerfil, setMenuPerfil] = useState(false);

	const handleLogout = () => {
		setUser(null);
	};

	const primeraLetra = user?.name[0];

	return (
		<div className={styles.navbar_wrapper}>
			<nav className={styles.navbar}>
				<Text className={styles.logo} h2>
					Semana14?
				</Text>
				<div
					style={{
						display: "flex",
						height: "100%",
						alignItems: "center",
						gap: "1rem",
					}}
				>
					<ul className={styles.navbar_links}>
						<li className={styles.navbar_link}>
							<NavLink to='/'>Inicio</NavLink>
						</li>
						{!user && (
							<li className={styles.navbar_link}>
								<Button
									onPress={() => {
										navigate("/login");
									}}
									auto
									color={"gradient"}
								>
									INGRESAR
								</Button>
							</li>
						)}
					</ul>
					{user && (
						<div className='container_perfil'>
							<div
								className='user_perfil'
								onClick={() => {
									setMenuPerfil(!menuPerfil);
								}}
							>
								{primeraLetra}
							</div>
							{menuPerfil && (
								<div className='menu_perfil'>
									<Text className='nametext' h4>
										{user.name}
									</Text>
									<ul>
										<li>
											<NavLink to='/profile'>
												Ver Perfil
											</NavLink>
										</li>
										<li>
											<Button
												onPress={handleLogout}
												auto
												size={"sm"}
												color={"gradient"}
												css={{
													width: "100%",
												}}
											>
												Cerrar sesión
											</Button>
										</li>
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Header;
