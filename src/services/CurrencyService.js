const CurrencyService = () => {

	const getResource = async (url) => {
		let res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
	
		return await res.json();
	}

	const getAllCurrences = async () => {
		//return getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
		const res = await getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
		const uahCurr = [{
			r030: 1,
			txt: 'Українська гривня',
			cc: 'UAH',
			rate: 1,
			exchangedate: new Date().toLocaleDateString()
		}]
		const allCurr = [...uahCurr, ...res];
		
		return allCurr.map(_transformCurrency);
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

	return {
		getAllCurrences,
	}
}

export default CurrencyService;