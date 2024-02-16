import { useContext } from "react";
import { GuestsContext } from "../context/GuestsContext.jsx";
import Personne from "../components/Personne.jsx";

export default function Home() {
	const { guests } = useContext(GuestsContext);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-4">
						<table className="table table-striped mt-4">
							<tbody>
								<tr>
									<th>Prénom</th>
									<th>Nom</th>
								</tr>

								{guests &&
									guests.map((guest) => (
										<Personne data={guest} readOnly={true} key={guest.id} />
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
