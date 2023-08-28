import { useState } from 'react';

import CurrencyService from "../../services/CurrencyService";

const CurrenciesList = () => {

	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);

	const {getAllCurrences} = CurrencyService();



	if(loading) {
		getAllCurrences().then((values) => {
			let sumArr = []
			values.forEach((element) => {
				const elemArr = [<li key={element.id} 
											style={{ listStyleType: "none" }}>
												<button className="dropdown-item fs-4 text-center" 
												href="#" 
												value={element.name}>{element.name}
												</button></li>]
				sumArr = [sumArr, ...elemArr]
				setList([...list, ...sumArr])
				setLoading(false)})
		})
	}

	return (
		<div className="input-group mb-3 p-4">
			<button className="btn btn-primary dropdown-toggle fs-3 shadow"
				type="button" data-bs-toggle="dropdown"
				aria-expanded="false">Вибрати валюту</button>
			<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle">
				{list}
			</ul>
			<input type="text" className="form-control fs-3 shadow bg-light"
				aria-label="Text input with dropdown button"/>
		</div>
	);
}

export default CurrenciesList