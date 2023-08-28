import CurrencyService from "../../services/CurrencyService";
import CurrenciesList from "../currenciesList/CurrenciesList";

const SellingCurrency = () => {

	const currencyService = CurrencyService();

	const dropDown = document.querySelector('.dropdown-menu');
	const li = document.createElement('li');

	currencyService.getAllCurrences()
		.then((values) => {
			const selectedCurr = values;
		});

	return (
		<>
		
				<div className="col-lg-6">
					<p className="fs-1 text-capitalize fw-semibold mt-4">Конвертувати</p>
					<CurrenciesList/>
				</div>
		</>
	)
}

export default SellingCurrency;