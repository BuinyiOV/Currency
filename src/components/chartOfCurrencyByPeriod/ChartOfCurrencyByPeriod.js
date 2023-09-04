import { useState, useEffect, Suspense } from 'react';

import ButtonCurrencySelect from '../buttonCurrencySelect/ButtonCurrencySelect';
import Chart from '../chart/Chart';


const ChartOfCurrencyByPeriod = ({onGetCurrenciesByExchangeDate, allCurrencies, selectedMvp}) => {
	
	const [serviceStart, setServiceStart] = useState([]);
	const [currenciesList, setCurrenciesList] = useState([]);
	const [firstMvpName, setFirstMvpName] = useState ('USD');
	const [firstMvpData, setFirstMvpData] = useState ([]);
	const [secondMvpName, setSecondMvpName] = useState ('EUR');
	const [secondMvpData, setSecondMvpData] = useState ([]);
	const [thirdMvpName, setThirdMvpName] = useState ('PLN');
	const [thirdMvpData, setThirdMvpData] = useState ([]);
	
	useEffect (() => {
		setServiceStart(onGetCurrenciesByExchangeDate());
	}, [onGetCurrenciesByExchangeDate, selectedMvp])

	useEffect (() => {
		setCurrenciesList(allCurrencies);
	}, [allCurrencies])

	useEffect(() => {
		onSelectedFirst();
		onSelectedSecond();
		onSelectedThird();
	},[currenciesList])

	const onSelectedFirst = (e) => {
		if(e && e.target.classList.contains('dropdown-item')) {

			setSelectedMvp(e.target.value, setFirstMvpName, setFirstMvpData)

		} else if (firstMvpName === 'USD') {

			setSelectedMvp("USD", setFirstMvpName, setFirstMvpData)
		} else {

			setSelectedMvp(firstMvpName, setFirstMvpName, setFirstMvpData)
		}
	}

	const onSelectedSecond = (e) => {
		if(e && e.target.classList.contains('dropdown-item')) {

			setSelectedMvp(e.target.value, setSecondMvpName, setSecondMvpData)

		} else if (secondMvpName === 'EUR') {

			setSelectedMvp('EUR', setSecondMvpName, setSecondMvpData)
		} else {

			setSelectedMvp(secondMvpName, setSecondMvpName, setSecondMvpData)
		}
	}

	const onSelectedThird = (e) => {
		if(e && e.target.classList.contains('dropdown-item')) {

			setSelectedMvp(e.target.value, setThirdMvpName, setThirdMvpData)

		} else if (thirdMvpName === 'PLN') {

			setSelectedMvp('PLN', setThirdMvpName, setThirdMvpData)
		} else {

			setSelectedMvp(thirdMvpName, setThirdMvpName, setThirdMvpData)
		}
	}

	const setSelectedMvp = (currency, setMvpName, setMvpData) => {
		let sumCurrArr = [];
		const selectedCurr = currenciesList.filter(curr => curr.codeName === currency);
		selectedCurr.forEach((element, i) => {

			let mainCurr = currenciesList.filter(curr => curr.codeName === selectedMvp)[i].rate

			const currArr = [{x: new Date(element.exchangeDate.replace(/(\d+).(\d+).(\d+)/, '$3-$2-$1')), y: resultCalc (mainCurr, (element.rate))}];
			sumCurrArr = [...sumCurrArr, ...currArr];
		});

		setMvpData(sumCurrArr)
		setMvpName(currency)
	}
	
	const resultCalc = (b, c) => {
		if (((1 * (Number(c))) / (Number(b))) < Infinity){
			let res = (Math.round(((1 * (Number(c))) / (Number(b))) * 1000)/1000)
			return res
		}
	}


	return (
		<>
<div className="container-fluid text-center bg-primary-subtle rounded py-1">

	<div className="row p-1">

		<div className="col-lg-4">
			<ButtonCurrencySelect
				onClick={onSelectedFirst}
				mvpName={firstMvpName}
				/>
			<Chart
				chartData={firstMvpData}
				chartName={firstMvpName}/>
		</div>

		<div className="col-lg-4">
			<ButtonCurrencySelect
				onClick={onSelectedSecond}
				mvpName={secondMvpName}
				/>
			<Chart
				chartData={secondMvpData}
				chartName={secondMvpName}/>
		</div>

		<div className="col-lg-4">
			<ButtonCurrencySelect
				onClick={onSelectedThird}
				mvpName={thirdMvpName}
				/>
			<Chart
				chartData={thirdMvpData}
				chartName={thirdMvpName}/>
		</div>
	</div>
</div>
		</>
	)
}

export default ChartOfCurrencyByPeriod;