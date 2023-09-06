import { useState, useCallback } from 'react';

import CurrencyByDataService from '../../services/CurrencyByDataService';

import CurrenciesList from '../currenciesList/CurrenciesList'
import ChartOfCurrencyByPeriod from '../chartOfCurrencyByPeriod/ChartOfCurrencyByPeriod';

const PriceDuringThePeriod = ({language}) => {

	const {getCurrencesByExchangeDate} = CurrencyByDataService()
	const [allCurrencies, setAllCurrencies] = useState([]);
	const [selectedMvp, setSelectedMvp] = useState ('UAH');

	let text;

	switch (language) {
		case 'EN':
			text = 'Changes in the value of currencies within 10 days relative to: '
			break;
		case 'PL':
			text = 'Zmiany wartości walut w ciągu 10 dni w stosunku do: '
			break;
		case 'UA':
			text = 'Зміни вартості валют протягом 10 днів відносно: '
			break;
		default: 
			text = 'Changes in the value of currencies within 10 days relative to: '
	}

	const onSelected = (e) => {

		if(e.target.classList.contains('dropdown-item')) {
			setSelectedMvp(e.target.value);
		}
	}

	const onGetCurrenciesByExchangeDate = useCallback(() => {

		getCurrencesByExchangeDate().then((values) => {
			
				let sumCurrArr = [];

				values.forEach((element) => {
					const currArr = [element];
					sumCurrArr = [...sumCurrArr, ...currArr];
				});

				setAllCurrencies([...allCurrencies, ...sumCurrArr])
		})
	}, [])

	return (
		<>
		<div className="container-fluid text-center bg-primary-subtle rounded py-1">

			<div className="row p-2 my-2 align-items-center">
				<div className="col-sm-7 fs-5 text-center text-sm-end" >{text}
				</div>
				<div className="dropdown col-sm-5 fs-3 text-center text-sm-start"
					onClick={onSelected}>
					<button className="btn btn-primary fs-5 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						{selectedMvp}
					</button>
					<CurrenciesList/>
				</div>
			</div>
		</div>



		<ChartOfCurrencyByPeriod 
					onGetCurrenciesByExchangeDate={onGetCurrenciesByExchangeDate}
					allCurrencies={allCurrencies}
					selectedMvp={selectedMvp}
		/>
		</>
		
	)
}

export default PriceDuringThePeriod;