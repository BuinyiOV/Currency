import { useState, useEffect } from 'react';

import CurrenciesList from '../currenciesList/CurrenciesList';
import WideDiv from '../wideDiv/WideDiv';

const BuyingCurrency = ({sellRate, sellCurr, language}) => {

	const [selected, setSelected] = useState ();
	const [currLabel, setCurrLabel] = useState ('');
	const [buyRate, setBuyRate] = useState (0);
	const [result, setResult] = useState (0);
	const [exchangeDate, setexchangeDate] = useState ('');
	const [exchangeDateText, setExchangeDateText] = useState ('');

	let lang;
	let text;
	let date;

	switch (language) {
		case 'EN':
			lang = 'Choose a currency'
			text = 'Buy'
			date = 'The course is set for the date: '
			break;
		case 'PL':
			lang = 'Wybierz walutę'
			text = 'Kupić'
			date = 'Kurs ustalany jest na termin: '
			break;
		case 'UA':
			lang = 'Оберіть валюту'
			text = 'Купити'
			date = 'Курс встановлений на: '
			break;
		default: 
			lang = 'Choose a currency'
			text = 'Buy'
			date = 'The course is set for the date: '
	}

	useEffect(()=>{
		setSelected(lang);
		setExchangeDateText(date);
		setexchangeDate('')
		setCurrLabel('')
	}, [language])

	useEffect (()=>{
		resultCalc(sellCurr, sellRate, buyRate)
	},[sellCurr, sellRate, buyRate])

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setBuyRate(e.target.dataset.rate);
			setCurrLabel(e.target.dataset.label);
			setexchangeDate(e.target.dataset.exchangedate);
			setExchangeDateText(date);
		}

		if(document.getElementById("buyBtn")) {
			document.getElementById("buyBtn").animate(
					[
						{ filter: 'opacity(50%)' },
						{ filter: 'opacity(100%)'},
					],
					{
						duration: 500,
						iterations: 1,
					},
				);
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
				<p className="fs-2 text-capitalize fw-semibold mt-4">{text}</p>
				<WideDiv value={currLabel}/>
				<div className="input-group mb-2 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-5 shadow"
									id="buyBtn"
									type="button" data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList language={language}/>
						<input type="text" 
								className="form-control fs-4 shadow bg-light"
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