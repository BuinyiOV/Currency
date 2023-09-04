import { useState, useCallback, useEffect } from 'react';

import CurrencyByDataService from '../../services/CurrencyByDataService';
import Chart from '../chart/Chart';

const PriceDuringThePeriod = () => {

	const {getCurrencesByExchangeDate} = CurrencyByDataService()
	const [currency, setCurrency] = useState([]);

const onGetCurrencesByExchangeDate = useCallback(() => {
	getCurrencesByExchangeDate().then((values) => {
		let sumCurrArr = [];
		const selectedCurr = values.filter(curr => curr.codeName === "USD");
		selectedCurr.forEach((element) => {
			const currArr = [{x: new Date(element.exchangeDate.replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')), y: element.rate}];
			console.log(new Date(element.exchangeDate.replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')));
			
			sumCurrArr = [...sumCurrArr, ...currArr];
		});

		setCurrency([...currency, ...sumCurrArr])
})



}, [])

return (
	<>
	<ChartOfCurrencyByPeriod 
				onGetCurrencesByExchangeDate={onGetCurrencesByExchangeDate}
				currency={currency}
	/>
	</>
	
)
}

const ChartOfCurrencyByPeriod = ({onGetCurrencesByExchangeDate, currency}) => {
	
	const [serviceStart, setServiceStart] = useState([]);
	const [chartData, setChartData] = useState([]);

	useEffect (() => {
		setServiceStart(onGetCurrencesByExchangeDate());
	}, [onGetCurrencesByExchangeDate])

	useEffect (() => {
		setChartData(currency);
	}, [currency])


	return (
		<>
			<Chart
					chartData={chartData}/>
			

		</>
	)
}

export default PriceDuringThePeriod;