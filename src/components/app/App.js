import { useState } from 'react'
import Child from '../buttons/Buttons'

// import CurrencyService from '../../services/CurrencyService';
// import SellingCurrency from '../sellingCurrency/SellingCurrency';
// import BuyingCurrency from '../buyingCurrency/BuyingCurrency';

const App = () => {

	const [value, setValue] = useState('')
	const handleChange = (value) => {
	  setValue(value)
	}
 
	return (
	  <div>
		 <span>Value is: {value || '<Not set>'}</span>
		 <Child onChange={handleChange} />
	  </div>
	)

// const currencyService = CurrencyService();
// currencyService.getAllCurrences();

// 	return (
// 		<>
// 			<div className="wrapper bg-primary bg-gradient bg-opacity-75" style={{minHeight:'100vh'}}>
// 		<div className="container text-center position-absolute top-50 start-50 translate-middle bg-primary-subtle rounded">
// 			<div className="row">
// 			<SellingCurrency/>
// 			<BuyingCurrency/>
// 			</div>
// 		</div>
// 	</div>
// 		</>
// 	)
}

export default App;