import { useState, useCallback } from 'react';

import CurrencyByDataService from '../../services/CurrencyByDataService';

import CurrenciesList from '../currenciesList/CurrenciesList'
import ChartOfCurrencyByPeriod from '../chartOfCurrencyByPeriod/ChartOfCurrencyByPeriod';

const PriceDuringThePeriod = () => {

	const {getCurrencesByExchangeDate} = CurrencyByDataService()
	const [allCurrencies, setAllCurrencies] = useState([]);
	const [selectedMvp, setSelectedMvp] = useState ('UAH');

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
				<div className="col-sm-7 fs-5 text-center text-sm-end" >Зміни вартості валют протягом місяця відносно: 
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