import { Text } from "@nextui-org/react";
import styles from "./Footer.module.css";
import ThunderIcon from "../icons/ThunderIcon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.byAlmeyda}>
				<Text weight={"medium"} className={styles.powered}>
					Powered by
				</Text>
				<ThunderIcon />
				<Text
					weight={"medium"}
					className={styles.almeyda}
					as={"a"}
					href='https://www.linkedin.com/in/anderson-almeyda-torres/'
					target={"_blank"}
				>
					Almeyda
				</Text>
			</div>
		</footer>
	);
};

export default Footer;
