import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const url = "http://localhost:4000/api/auth/login";
	const [currentUser, setCurrentUser] = useState(null);

	async function login(credentials) {
		try {
			const response = await axios.post(url, credentials);
			const { user, token } = response.data;

			setCurrentUser(user);
			localStorage.setItem("token", token);
		} catch (error) {
			console.log("Erreur lors de la tentative de connexion.");
		}
	}

	function logout() {
		setCurrentUser(null);
		localStorage.removeItem("token");
	}

	if (!currentUser && localStorage.getItem("token")) setCurrentUser(true);

	// dev
	useEffect(
		() => console.log("currentUser from context : ", currentUser),
		[currentUser]
	);

	return (
		<UserContext.Provider value={{ currentUser, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};
