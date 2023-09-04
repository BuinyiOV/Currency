const CurrencyService = () => {

	const getResource = async (url) => {
		let res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
	
		return await res.json();
	}

	const getAllCurrences = async () => {

		const res = await getResource(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
		const usdCurr = [res.find(curr => curr.cc === "USD")];
		const eurCurr = [res.find(curr => curr.cc === "EUR")];
		const plnCurr = [res.find(curr => curr.cc === "PLN")];
		const uahCurr = [{
			r030: 1,
			txt: 'Українська гривня',
			cc: 'UAH',
			rate: 1,
			exchangedate: res.find(curr => curr.cc === "USD").exchangedate
		}]

		const clippedRes = [...res];

		const cutArr2 = (currency, arr) => {
			const currIndex = (element) => (element === arr.find(curr => curr.cc === currency));
			arr.splice((arr.findIndex(currIndex)), 1)
		};

		cutArr2("USD", clippedRes);
		cutArr2("EUR", clippedRes);
		cutArr2("PLN", clippedRes);
		
		const allCurr = [...usdCurr, ...eurCurr, ...plnCurr, ...uahCurr, ...clippedRes.sort((a, b) => a.txt.localeCompare(b.txt))];
		
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

	return {getAllCurrences}
}



export default CurrencyService;