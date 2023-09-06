import { useState, useEffect, Suspense, lazy } from 'react'
import WebFont from 'webfontloader';

import Spinner from '../spiner/Spinner';

const Lang = lazy(() => import ('../lang/Lang'))
const Navbar = lazy(() => import ('../navbar/Navbar'));
const SellingCurrency = lazy(() => import ('../sellingCurrency/SellingCurrency'));
const BuyingCurrency = lazy(() => import ('../buyingCurrency/BuyingCurrency'));
const Modal = lazy(() => import ('../modal/modal'));
const PriceDuringThePeriod = lazy(() => import ('../priceDuringThePeriod/PriceDuringThePeriod'))
const Footer = lazy(() => import ('../footer/Footer'))

const App = () => {

	const [sellCurr, setSellCurr] = useState (0);
	const [sellRate, setSellRate] = useState (0);
	const [language, setLanguage] = useState ('EN')

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Lobster', 'Roboto', 'PT Sans Caption']
			}
		})
	}, []);

	const onSellCurr = (value) => {
		setSellCurr(value)
	}
		
	const onSellRate = (value) => {
		setSellRate(value)
	}

	const onSelectLanguage = (value) => {
		setLanguage(value)
	}





	return (
		<>
			<div className="wrapper bg-primary bg-gradient bg-opacity-75" style={{minHeight:'100vh', fontFamily: 'PT Sans Caption'}}>
				<Suspense fallback={<Spinner/>}>
					<Navbar language={language}/>
					<Lang onClick={onSelectLanguage}/>
					<div className="container text-center bg-primary-subtle rounded mb-5">
						<div className="row">
						<SellingCurrency onChange={onSellCurr}
												onClick={onSellRate}
												language={language}/>
						<BuyingCurrency sellRate={sellRate}
												sellCurr={sellCurr}
												language={language}/>
						</div>
					</div>
					<div className="container text-center bg-primary-subtle rounded mb-5">
						<Modal language={language}/>
					</div>
					<Suspense fallback={<Spinner/>}>
						<PriceDuringThePeriod language={language}/>
					</Suspense>
					<Footer language={language}/>
				</Suspense>
			</div>
		</>
	)
}

export default App;