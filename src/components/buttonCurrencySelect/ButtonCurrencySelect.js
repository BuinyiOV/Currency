import CurrenciesListNew from "../currenciesList/CurrenciesList";

const ButtonCurrencySelect = ({ onClick, mvpName }) => {

	return (
		<div className="dropdown"
			onClick={onClick}>
				<button className="btn btn-primary mb-4 fs-5 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					{mvpName}
				</button>
				<CurrenciesListNew/>
		</div>
	)
}

export default ButtonCurrencySelect;