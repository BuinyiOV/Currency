import { useState, useEffect } from 'react'
import WebFont from 'webfontloader';


import Navbar from '../navbar/Navbar';
import SellingCurrency from '../sellingCurrency/SellingCurrency';
import BuyingCurrency from '../buyingCurrency/BuyingCurrency';

import PriceDuringThePeriod from '../priceDuringThePeriod/PriceDuringThePeriod'

const App = () => {

	const [sellCurr, setSellCurr] = useState (0);
	const [sellRate, setSellRate] = useState (0);

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Libre Baskerville', 'Roboto']
			}
		})
	}, []);

	const onSellCurr = (value) => {
		setSellCurr(value)
	}
		
	const onSellRate = (value) => {
		setSellRate(value)
	}



	return (
		<>
			<div className="wrapper bg-primary bg-gradient bg-opacity-75" style={{minHeight:'100vh', fontFamily: 'Libre Baskerville'}}>
				<Navbar/>
				<div className="container text-center bg-primary-subtle rounded mb-5">
					<div className="row">
					<SellingCurrency onChange={onSellCurr}
											onClick={onSellRate}/>
					<BuyingCurrency sellRate={sellRate}
											sellCurr={sellCurr}/>
					</div>
				</div>
				<PriceDuringThePeriod/>
			</div>
		</>
	)
}

export default App;