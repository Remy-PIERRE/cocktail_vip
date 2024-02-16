import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function LoginPage() {
	const { currentUser, login } = useContext(UserContext);

	if (currentUser) return <Navigate to="/"></Navigate>;

	function handleFormSubmit(event) {
		event.preventDefault();

		const email = event.target.email.value;
		const password = event.target.password.value;

		if (!email || !password) return alert("Le formulaire n'est pas complet !");

		login({ email, password });
	}
	return (
		<>
			<h1>Connexion</h1>
			<form action="" onSubmit={handleFormSubmit}>
				<label htmlFor="">E-mail</label>
				<input type="text" name="email" />
				<label htmlFor="">Mot de passe</label>
				<input type="text" name="password" />
				<button type="submit">Valider</button>
			</form>
		</>
	);
}

export default LoginPage;
