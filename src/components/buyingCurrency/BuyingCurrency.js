import { useState, useEffect } from 'react';

import CurrenciesList from "../currenciesList/CurrenciesList";

const BuyingCurrency = ({sellRate, sellCurr}) => {

	const [selected, setSelected] = useState ('Оберіть валюту');
	const [currLabel, setCurrLabel] = useState ('');
	const [buyRate, setBuyRate] = useState (0);
	const [result, setResult] = useState (0);

	useEffect (()=>{
		resultCalc(sellCurr, sellRate, buyRate)
	},[sellCurr, sellRate, buyRate])

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setBuyRate(e.target.dataset.rate);
			setCurrLabel(e.target.dataset.label)
		}
	}

	const resultCalc = (a, b, c) => {
		if ((((Number(a)) * (Number(b))) / (Number(c))) < Infinity){
			setResult (Math.round((((Number(a)) * (Number(b))) / (Number(c))) * 100)/100)
		};
	}

	return (
		<>
			<div className="col-lg-6 order-1">
				<p className="fs-1 text-capitalize fw-semibold mt-4">Отримати</p>
				<div className="input-group mb-3 pt-4 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-3 shadow"
									type="button" data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList/>
						<input type="text" 
								className="form-control fs-3 shadow bg-light"
								aria-label="Text input with dropdown button"
								value={result}
								readOnly/>
				</div>
				<div className="col-lg-12 mb-4 fs-5 text-capitalize" style={{height: '3vh'}}>{currLabel}</div>
			</div>
		</>
	)
}

export default BuyingCurrency;