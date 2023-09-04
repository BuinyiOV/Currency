import { useState, useEffect } from 'react';

import CurrenciesList from '../currenciesList/CurrenciesList';
import WideDiv from '../wideDiv/WideDiv';

const BuyingCurrency = ({sellRate, sellCurr}) => {

	const [selected, setSelected] = useState ('Оберіть валюту');
	const [currLabel, setCurrLabel] = useState ('');
	const [buyRate, setBuyRate] = useState (0);
	const [result, setResult] = useState (0);
	const [exchangeDate, setexchangeDate] = useState ('');
	const [exchangeDateText, setexchangeDateText] = useState ('');

	useEffect (()=>{
		resultCalc(sellCurr, sellRate, buyRate)
	},[sellCurr, sellRate, buyRate])

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setBuyRate(e.target.dataset.rate);
			setCurrLabel(e.target.dataset.label);
			setexchangeDate(e.target.dataset.exchangedate);
			setexchangeDateText('Курс встановлений на: ');
		}
	}

	const resultCalc = (a, b, c) => {
		if ((((Number(a)) * (Number(b))) / (Number(c))) < Infinity){
			setResult (Math.round((((Number(a)) * (Number(b))) / (Number(c))) * 1000)/1000)
		};
	}

	return (
		<>
			<div className="col-lg-6 order-1">
				<p className="fs-1 text-capitalize fw-semibold mt-4">Отримати</p>
				<WideDiv value={currLabel}/>
				<div className="input-group mb-3 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-3 shadow"
									type="button" data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList/>
						<input type="text" 
								className="form-control fs-3 shadow bg-light"
								aria-label="Text input with dropdown button"
								value={result}
								style={{fontFamily: 'Roboto', fontWeight: '600'}}
								readOnly/>
				</div>
				<WideDiv 
				filledText={exchangeDateText}
				value={exchangeDate}/>
			</div>
		</>
	)
}

export default BuyingCurrency;