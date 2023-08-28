import CurrencyService from '../../services/CurrencyService';

const Buttons = () => {

	const field = document.querySelectorAll('.input-group');
	const btns = document.querySelectorAll('.btn');
	const inputs = document.querySelectorAll('.form-control');
	const currencyService = CurrencyService();
	const dropDown = document.querySelector('.dropdown-menu');

	currencyService.getAllCurrences()
	.then((values) => {
		const selectedCurr = values

		

		selectedCurr.forEach(item=>{
			const li = document.createElement('li');
			const btnCurr = document.createElement('button');
			btnCurr.classList.add('dropdown-item');
			btnCurr.classList.add('fs-4');
			btnCurr.classList.add('text-center');
			btnCurr.setAttribute("value", `${item.codeName}`);
			btnCurr.textContent = `${item.codeName}`;
			//dropDown.append(li);
			//li.append(btnCurr);
		})
		



		field.forEach((item, i)=>{
			item.addEventListener('click',(e)=>{
	
				if (e.target && e.target.classList.contains('dropdown-item')){
					btns[i].innerText = e.target.value;
					console.log(e.target);
					

					let item = selectedCurr.find(item => item.codeName === e.target.value);
					inputs[i].value = item.rate;
				}
			})
		})
	
		
	});
	//-------------------------------------------------------------------------------  
}
	
	export default Buttons;