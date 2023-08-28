import CurrencyService from '../../services/CurrencyService';
import Buttons from '../buttons/Buttons';
import SellingCurrency from '../sellingCurrency/SellingCurrency';
import BuyCurrency from '../buyCurrency/BuyCurrency';

const App = () => {
	Buttons();

const currencyService = CurrencyService();
currencyService.getAllCurrences();

	return (
		<>
			<div className="wrapper bg-primary bg-gradient bg-opacity-75" style={{minHeight:'100vh'}}>
		<div className="container text-center position-absolute top-50 start-50 translate-middle bg-primary-subtle rounded">
			<div className="row">
			<SellingCurrency/>
			<BuyCurrency/>
			</div>
		</div>
	</div>
		</>
	)
}

export default App;