import CurrencyService from "../../services/CurrencyService";

const BuyCurrency = () => {

const currencyService = CurrencyService();
currencyService.getAllCurrences();

	return (
		<>
				<div className="col-lg-6">
					<p className="fs-1 text-capitalize fw-semibold mt-4">Отримати</p>
					<div className="input-group mb-3 p-4">
						<button className="btn btn-primary dropdown-toggle fs-3 shadow" type="button" data-bs-toggle="dropdown"
							aria-expanded="false">Вибрати валюту</button>
						<ul className="dropdown-menu dropdown-menu-end bg-primary-subtle">
							<li><button className="dropdown-item fs-4 text-center" href="#" value="USD">USD</button></li>
							<li><button className="dropdown-item fs-4 text-center" href="#" value="EUR">EUR</button></li>
							<li><button className="dropdown-item fs-4 text-center" href="#" value="UAH">UAH</button></li>
						</ul>
						<input type="text" className="form-control fs-3 shadow bg-light"
							aria-label="Text input with dropdown button" disabled readOnly/>
					</div>
				</div>
		</>
	)
}

export default BuyCurrency;