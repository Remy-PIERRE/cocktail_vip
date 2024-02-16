import { useContext } from "react";
import { GuestsContext } from "../context/GuestsContext.jsx";
import Personne from "../components/Personne.jsx";

export default function Builder() {
	const { guests, addGuestData } = useContext(GuestsContext);

	function handleFormSubmit(event) {
		event.preventDefault();

		const prenom = event.target.prenom.value;
		const nom = event.target.nom.value;

		if (!prenom || !nom) {
			return alert("Le formulaire n'est pas complet !");
		}

		addGuestData({ nom, prenom });
		event.target.reset();
	}

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div className="bg-gris p-4">
							<form method="post" onSubmit={handleFormSubmit}>
								<div className="row">
									<div className="col-4">
										<input
											aria-label="Prenom"
											className="form-control"
											placeholder="Prenom"
											name="prenom"
										/>
									</div>
									<div className="col-4">
										<input
											aria-label="Nom"
											className="form-control"
											placeholder="Nom"
											name="nom"
										/>
									</div>
									<div className="col-1">
										<button className="btn btn-success" type="submit">
											<i className="fa fa-plus"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-4">
						<table className="table table-striped mt-4">
							<tbody>
								<tr>
									<th>Prénom</th>
									<th>Nom</th>
									<th colSpan="3">Actions</th>
								</tr>

								{guests &&
									guests.map((guest) => (
										<Personne data={guest} readOnly={false} key={guest.id} />
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
