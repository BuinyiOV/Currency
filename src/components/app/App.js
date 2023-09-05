import { useState, useEffect, Suspense, lazy } from 'react'
import WebFont from 'webfontloader';

import Spinner from '../spiner/Spinner';

const Navbar = lazy(() => import ('../navbar/Navbar'));
const SellingCurrency = lazy(() => import ('../sellingCurrency/SellingCurrency'));
const BuyingCurrency = lazy(() => import ('../buyingCurrency/BuyingCurrency'));
const Modal = lazy(() => import ('../modal/modal'));
const PriceDuringThePeriod = lazy(() => import ('../priceDuringThePeriod/PriceDuringThePeriod'))

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
			<Suspense fallback={<Spinner/>}>
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
					<div className="container text-center bg-primary-subtle rounded mb-5">
						<Modal/>
					</div>
					<PriceDuringThePeriod/>
					<div className="container-fluid text-center p-4">
						<p>Курс валют за даними Національного бану України</p>
						<a href="https://bank.gov.ua/">bank.gov.ua</a></div>
				</div>
			</Suspense>
		</>
	)
}

export default App;