import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
	return (
		<div id='__almeyda'>
			<Header />
			<main className='wrapper main_masna'>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
