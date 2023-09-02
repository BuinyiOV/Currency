import { useState } from 'react';

import CurrenciesList from "../currenciesList/CurrenciesList";
import CurrenciesByDataList from '../currencyByDataListCreating/CurrenciesByDataList';
import Chart from '../chart/Chart';

const MvpCurrencies = () => {

	const [selectedMvp, setSelectedMvp] = useState ('UAH');
	const [firstMvp, setFirstMvp] = useState ('USD');
	const [secondMvp, setSecondMvp] = useState ('EUR');
	const [thirdMvp, setThirdMvp] = useState ('PLN');

	const onSelected = (e) => {
		setFirstMvp(firstMvp + 1)
		if(e.target.classList.contains('dropdown-item')) {
			setSelectedMvp(e.target.value);
		}
	}

	const onSelectedFirst = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setFirstMvp(e.target.value);
		}
	}

	const onSelectedSecond = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setSecondMvp(e.target.value);
		}
	}

	const onSelectedThird = (e) => {
		if(e.target.classList.contains('dropdown-item')) {
			setThirdMvp(e.target.value);
		}
	}

	return (
		<>
			<div className="container-fluid text-center bg-primary-subtle rounded py-1">

				<div className="row p-1 my-3 align-items-center">
					<div className="col-sm-7 fs-3 text-center text-sm-end" >Зміни вартості валют протягом місяця відносно: 
					</div>
					<div className="dropdown col-sm-5 fs-3 text-center text-sm-start"
						onClick={onSelected}>
						<button className="btn btn-primary fs-4 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							{selectedMvp}
						</button>
						<CurrenciesList/>
					</div>
				</div>

					<div className="row p-1">

						<div className="col-xxl-4">
							<div className="dropdown"
								onClick={onSelectedFirst}>
								<button className="btn btn-primary mb-4 fs-4 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									{firstMvp}
								</button>
								<CurrenciesList/>
							</div>
							<CurrenciesByDataList
									mvpCurrency={firstMvp}/>
						</div>

						<div className="col-xxl-4">
							<div className="dropdown"
								onClick={onSelectedSecond}>
								<button className="btn btn-primary mb-4 fs-4 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									{secondMvp}
								</button>
								<CurrenciesList/>
							</div>
							{/* <CurrenciesByDataList
									mvpCurrency={secondMvp}/> */}
						</div>

						<div className="col-xxl-4">
							<div className="dropdown"
								onClick={onSelectedThird}>
								<button className="btn btn-primary mb-4 fs-4 shadow dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
									{thirdMvp}
								</button>
								<CurrenciesList/>
							</div>
							{/* <CurrenciesByDataList
									mvpCurrency={thirdMvp}/> */}
						</div>
				</div>
			</div>
		</>
	)
}

export default MvpCurrencies;