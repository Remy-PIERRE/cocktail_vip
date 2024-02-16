import { createContext, useState, useEffect } from "react";

export const GuestsContext = createContext();

export const GuestsProvider = ({ children }) => {
	const url = "http://localhost:4000/api/personnes/";
	const [guests, setGuests] = useState();
	const [options, setOptions] = useState();

	useEffect(() => {
		setOptions({
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		console.log("options changed");
	}, [localStorage.getItem("token")]);

	if (!guests || guests.length === 0) getGuestsData();

	async function getGuestsData() {
		const response = await axios.get(url);
		const data = response.data.data;

		if (data && data.length !== 0) setGuests([...data]);
	}

	function getGuestData(id) {
		if (!guests || guests.length === 0) return;
		else return guests.find((data) => +data.id === +id);
	}

	async function deleteGuestData(id) {
		await axios.delete(url + id, options);
		await getGuestsData();
	}

	async function addGuestData(data) {
		await axios.post(url, data, options);
		await getGuestsData();
	}

	async function updateGuestData(data) {
		await axios.patch(url + data.id, data, options);
		await getGuestsData();
	}

	return (
		<GuestsContext.Provider
			value={{
				guests,
				getGuestData,
				deleteGuestData,
				addGuestData,
				updateGuestData,
			}}>
			{children}
		</GuestsContext.Provider>
	);
};
