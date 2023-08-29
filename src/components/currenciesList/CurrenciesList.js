import { useState } from 'react';

import CurrencyService from "../../services/CurrencyService";

const CurrenciesList = () => {

	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);

	const {getAllCurrences} = CurrencyService();



	if (loading) {
		getAllCurrences().then((values) => {
			let sumArr = []
			values.forEach((element) => {
				const elemArr = [<li key={element.id} 
											style={{ listStyleType: "none" }}>
												<button className="dropdown-item fs-4 text-center" 
												href="#" 
												value={element.codeName}
												data-rate={element.rate}
												data-label={element.name}>
														{element.codeName} ({element.name})
												</button></li>]
				sumArr = [sumArr, ...elemArr]
				setList([...list, ...sumArr])
				setLoading(false)})
		})
	}

	return (
		<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle">
			{list}
		</ul>
	);
}

export default CurrenciesList