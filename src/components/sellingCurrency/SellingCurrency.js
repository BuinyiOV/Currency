import { useState, useEffect } from 'react';

import CurrenciesList from '../currenciesList/CurrenciesList';
import WideDiv from '../wideDiv/WideDiv';

const SellingCurrency = ({ onChange, onClick, language }) => {

	const [selected, setSelected] = useState ();
	const [currLabel, setCurrLabel] = useState ();
	const [exchangeDate, setExchangeDate] = useState ('');
	const [exchangeDateText, setExchangeDateText] = useState ('');

	let lang;
	let text;
	let date;

	switch (language) {
		case 'EN':
			lang = 'Choose a currency'
			text = 'Sell'
			date = 'The course is set for the date: '
			break;
		case 'PL':
			lang = 'Wybierz walutę'
			text = 'Sprzedać'
			date = 'Kurs ustalany jest na termin: '
			break;
		case 'UA':
			lang = 'Оберіть валюту'
			text = 'Продати'
			date = 'Курс встановлений на: '
			break;
		default: 
		lang = 'Choose a currency'
		text = 'Sell'
		date = 'The course is set for the date: '
	}

	useEffect(()=>{
		setSelected(lang);
		setExchangeDateText(date);
		setExchangeDate('');
		setCurrLabel('');

	}, [language])

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setCurrLabel(e.target.dataset.label);
			setExchangeDate(e.target.dataset.exchangedate);
			setExchangeDateText(date);
			onClick(e.target.dataset.rate);
		}

		if(document.getElementById("sellBtn")) {
			document.getElementById("sellBtn").animate(
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

	const handleChange = (event) => {
		onChange(event.target.value)
	}

	return (
		<>
			<div className="col-lg-6 order-1">
				<p className="fs-2 text-capitalize fw-semibold mt-4">{text}</p>
				<WideDiv value={currLabel}/>
				<div className="input-group mb-2 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-5 shadow"
									id="sellBtn"
									type="button" 
									data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList language={language}/>
						<input type="number" 
								className="form-control fs-4 shadow bg-light"
								aria-label="Text input with dropdown button"
								onChange={handleChange}
								style={{fontFamily: 'Roboto', fontWeight: '600'}}/>
				</div>
				
				<WideDiv 
				filledText={exchangeDateText}
				value={exchangeDate}/>
			</div>
		</>
	)
}

export default SellingCurrency;