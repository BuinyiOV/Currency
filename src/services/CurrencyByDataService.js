const CurrencyByDataService = () => {

	const getResource = async (url) => {
		let res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
	
		return await res.json();
	}

	const getCurrencesByExchangeDate = async (curr) => {


		let currDifferentDatesArr = []

		for (let i = 0; i < 31; i++) {

			const resOfDate = await getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=EUR&date=${_getNeededDate(i)}&json`);
			
			// const uahCurr = [{
			// 	id: 1,
			// 	name: 'Українська гривня',
			// 	codeName: 'UAH',
			// 	rate: 1,
			// 	exchangeDate: new Date().toLocaleDateString()
			// }]

			const resOfDateArr = [...resOfDate.map(_transformCurrency)];

			currDifferentDatesArr = [...currDifferentDatesArr, ...resOfDateArr];
			
		}

		return currDifferentDatesArr;
	}

	const _transformCurrency = (curr) => {
		return {
			id: curr.r030,
			name: curr.txt,
			codeName: curr.cc,
			rate: curr.rate,
			exchangeDate: curr.exchangedate,
		}
	}

	const _getNeededDate = (i) => {

		let d = new Date(new Date() - 86400 * 1000 * i);
		d = [
			'' + d.getFullYear(),
			'0' + (d.getMonth() + 1),
			'0' + d.getDate(),
		].map(component => component.slice(-2));
	
		return ('20' + d.slice(0, 3).join(''))
	}

	return {
		getCurrencesByExchangeDate
	}
}

export default CurrencyByDataService;