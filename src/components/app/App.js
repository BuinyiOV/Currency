import { useState } from 'react'

import SellingCurrency from '../sellingCurrency/SellingCurrency';
import BuyingCurrency from '../buyingCurrency/BuyingCurrency';

const App = () => {

	const [sellCurr, setSellCurr] = useState (0);
	const [sellRate, setSellRate] = useState (0);

	const onSellCurr = (value) => {
		setSellCurr(value)
	}
	
	const onSellRate = (value) => {
		setSellRate(value)
	}

	return (
		<>
			<div className="wrapper bg-primary bg-gradient bg-opacity-75" style={{minHeight:'100vh'}}>
		<div className="container text-center position-absolute top-50 start-50 translate-middle bg-primary-subtle rounded">
			<div className="row">
			<SellingCurrency onChange={onSellCurr}
									onClick={onSellRate}/>
			<BuyingCurrency sellRate={sellRate}
									sellCurr={sellCurr}/>
			</div>
		</div>
	</div>
		</>
	)
}

export default App;