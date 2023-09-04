import { useState, useCallback, useEffect, useMemo } from 'react';

import CurrencyService from '../../services/CurrencyService';

const CurrenciesListNew = () => {

	const {getAllCurrences} = CurrencyService()
	const [list, setList] = useState([]);

const onCurrencyServiceRun = useCallback(() => {getAllCurrences().then((values) => {	
	
	let sumArr = []
	// console.log(sumArr);

	// setList([...values])
	
	

	values.forEach((element) => {
		const elemArr = [<li key={element.id} 
									style={{ listStyleType: "none" }}>
										<button className="dropdown-item fs-4 text-center" 
										href="#" 
										value={element.codeName}
										data-rate={element.rate}
										data-label={element.name}
										data-exchangedate={element.exchangeDate}>
												{element.codeName} ({element.name})
										</button></li>];
		sumArr = [...sumArr, ...elemArr]
		setList([...list, ...sumArr])
	});
})



}, [])

return (
	<>
	<CurenciesListNewOld 
				onCurrencyServiceRun={onCurrencyServiceRun}
				list={list}
	/>
	</>
	
)
}

const CurenciesListNewOld = ({onCurrencyServiceRun, list}) => {
	
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
			{/* <div style={{"width": '100px', "height": '100px'}}
				onClick={hj}
					>CurenciesListNew{num}</div>
			
			<div className="input-group mb-3 px-4">
						<button className="btn btn-primary dropdown-toggle fs-3 shadow"
									type="button" 
									data-bs-toggle="dropdown"
									aria-expanded="false">dfghsrtgrdstg</button>
						<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle overflow-y-auto" 
									style={{maxHeight:"40vh"}}>
										{list}
									</ul>
						<input type="number" 
								className="form-control fs-3 shadow bg-light"
								aria-label="Text input with dropdown button"
								style={{fontFamily: 'Roboto', fontWeight: '600'}}/>
				</div> */}

<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle overflow-y-auto" 
		style={{maxHeight:"40vh"}}>
			{newList}
		</ul>

		</>
	)
}

export default CurrenciesListNew;