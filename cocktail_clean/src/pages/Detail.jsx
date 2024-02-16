import { useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { GuestsContext } from "../context/GuestsContext.jsx";

export default function Detail() {
	const { id } = useParams();
	const { getGuestData, updateGuestData } = useContext(GuestsContext);
	let navigate = useNavigate();

	const guest = getGuestData(id);
	if (!guest) return <Navigate to="/"></Navigate>;

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const prenom = event.target.prenom.value;
		const nom = event.target.nom.value;

		if (!prenom || !nom) {
			return alert("Le formulaire n'est pas complet !");
		}

		await updateGuestData({
			id: guest.id,
			nom,
			prenom,
			present: guest.present,
		});

		navigate("/builder");
	};

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
											defaultValue={guest.prenom}
										/>
									</div>
									<div className="col-4">
										<input
											aria-label="Nom"
											className="form-control"
											placeholder="Nom"
											name="nom"
											defaultValue={guest.nom}
										/>
									</div>
									<div className="col-1">
										<button className="btn btn-primary" type="submit">
											<i className="fa fa-floppy-disk"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
