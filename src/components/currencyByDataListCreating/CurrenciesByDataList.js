import { useState, useCallback, useEffect } from 'react';

import CurrencyByDataService from "../../services/CurrencyByDataService";
import Chart from '../chart/Chart';

const CurrenciesByDataList = (mvpCurrency) => {
	

	const [listByData, setListByData] = useState([]);

	const {getCurrencesByExchangeDate} = CurrencyByDataService();

	const onCreateChart = useCallback(() => {getCurrencesByExchangeDate().then((values) => {
			let sumArr = []
			values.forEach((element) => {
				const elemArr = [
					{ x: element.exchangeDate, y: element.rate},
					]
				sumArr = [...sumArr, ...elemArr]
				setListByData([...listByData, ...sumArr])
				
				
			})
		})
	}, [mvpCurrency])

	return (
		<>
			<OneChart 
				mvpCurrency={mvpCurrency}
				onCreateChart={onCreateChart}
			/>
		</>
	);
}

const OneChart = ({onCreateChart, mvpCurrency}) => {
	
	const [chart, setChart] = useState([]);

	useEffect (() => {
		setChart(onCreateChart())
	}, [onCreateChart])

	return (
		<>
			<Chart
					currency={mvpCurrency}
					mvpCurrency={mvpCurrency}
					/>
		</>
	)
}

export default CurrenciesByDataList