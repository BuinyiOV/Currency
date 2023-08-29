import { useState } from 'react';

import CurrenciesList from "../currenciesList/CurrenciesList";

const SellingCurrency = () => {

	const [selected, setSelected] = useState ('Оберіть валюту');
	const [sellCurr, setSellCurr] = useState (null);
	const [currLabel, setCurrLabel] = useState ()

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setSellCurr(e.target.dataset.rate);
			setCurrLabel(e.target.dataset.label)
		}
	}

	return (
		<>
			<div className="col-lg-6 order-1">
				<p className="fs-1 text-capitalize fw-semibold mt-4">Конвертувати</p>
				<div className="input-group mb-3 pt-4 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-3 shadow"
									type="button" data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList/>
						<input type="text" 
								className="form-control fs-3 shadow bg-light"
								aria-label="Text input with dropdown button"/>
				</div>
				<div className="col-lg-12 mb-4 fs-5 text-capitalize" style={{height: '3vh'}}>{currLabel}</div>
			</div>
		</>
	)
}

export default SellingCurrency;