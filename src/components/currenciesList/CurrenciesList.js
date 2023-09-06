import { useState, useCallback, useEffect } from 'react';

import CurrencyService from '../../services/CurrencyService';

const CurrenciesListNew = ({language}) => {

	const {getAllCurrences} = CurrencyService()
	const [list, setList] = useState([]);

const onCurrencyServiceRun = useCallback(() => {getAllCurrences().then((values) => {

	let text;

	switch (language) {
		case 'EN':
			text = false
			break;
		case 'PL':
			text = false
			break;
		case 'UA':
			text = true
			break;
		default: 
			text = false
	}
	
		let sumArr = []

		values.forEach((element) => {

			const elName = (element) => {
				if(text){
					return element.name
				} else {
					return ''
				}
			}
			
			const elemArr = [<li key={element.id} 
										style={{ listStyleType: "none" }}>
											<button className="dropdown-item fs-5 text-center" 
											href="#" 
											value={element.codeName}
											data-rate={element.rate}
											data-label={elName(element)}
											data-exchangedate={element.exchangeDate}>
													{element.codeName} {elName(element)}
											</button></li>];
			sumArr = [...sumArr, ...elemArr]
			setList([ ...sumArr])
		});
	})
}, [language])

return (
	<>
	<CurenciesList
				onCurrencyServiceRun={onCurrencyServiceRun}
				list={list}
	/>
	</>
	
)
}

const CurenciesList = ({onCurrencyServiceRun, list}) => {
	
	const [serviceStart, setServiceStart] = useState([]);
	const [newList, setNewList] = useState([]);

	useEffect (() => {
		setServiceStart(onCurrencyServiceRun());
	}, [onCurrencyServiceRun])

	useEffect (() => {
		setNewList(list);
	}, [list])


	return (
		<>
			<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle overflow-y-auto" 
				style={{maxHeight:"40vh"}}>
					{newList}
			</ul>
		</>
	)
}

export default CurrenciesListNew;