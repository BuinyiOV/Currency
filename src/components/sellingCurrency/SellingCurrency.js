import { useState } from 'react';

import CurrenciesList from '../currenciesList/CurrenciesList';
import WideDiv from '../wideDiv/WideDiv';

const SellingCurrency = ({ onChange, onClick }) => {

	const [selected, setSelected] = useState ('Оберіть валюту');
	const [currLabel, setCurrLabel] = useState ();
	const [exchangeDate, setExchangeDate] = useState ('');
	const [exchangeDateText, setExchangeDateText] = useState ('');

	const onSelected = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSelected(e.target.value);
			setCurrLabel(e.target.dataset.label);
			setExchangeDate(e.target.dataset.exchangedate);
			setExchangeDateText('Курс встановлений на: ');
			onClick(e.target.dataset.rate);
		}
	}

	const handleChange = (event) => {
		onChange(event.target.value)
	}

	return (
		<>
			<div className="col-lg-6 order-1">
				<p className="fs-1 text-capitalize fw-semibold mt-4">Конвертувати</p>
				<WideDiv value={currLabel}/>
				<div className="input-group mb-3 px-4"
					onClick={onSelected}>
						<button className="btn btn-primary dropdown-toggle fs-3 shadow"
									type="button" 
									data-bs-toggle="dropdown"
									aria-expanded="false">{selected}</button>
						<CurrenciesList/>
						<input type="number" 
								className="form-control fs-3 shadow bg-light"
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