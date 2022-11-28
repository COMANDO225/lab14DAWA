import { createContext, useState, useContext } from "react";

export const userContext = createContext();
export const useMyContext = () => useContext(userContext);

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	return (
		<userContext.Provider value={[user, setUser]}>
			{children}
		</userContext.Provider>
	);
};

export default UserProvider;
