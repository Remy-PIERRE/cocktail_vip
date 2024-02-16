import { Link } from "react-router-dom";
import { useContext } from "react";
import { GuestsContext } from "../context/GuestsContext";

export default function Personne({ data, readOnly }) {
	const { deleteGuestData, updateGuestData } = useContext(GuestsContext);

	return (
		<tr className={data.present ? "table-success" : "table-danger"}>
			<td>{data.prenom}</td>
			<td>{data.nom}</td>

			{!readOnly && (
				<>
					<td>
						<button
							className="btn btn-danger"
							onClick={() => deleteGuestData(data.id)}>
							<i className="fa fa-trash"></i>
						</button>
					</td>
					<td>
						<button
							className="btn btn-warning"
							onClick={() =>
								updateGuestData({ ...data, present: !data.present })
							}>
							<i className="fa fa-check"></i>
						</button>
					</td>
					<td>
						<Link to={`/detail/${data.id}`} className="btn btn-primary">
							<i className="fa fa-edit"></i>
						</Link>
					</td>
				</>
			)}
		</tr>
	);
}
