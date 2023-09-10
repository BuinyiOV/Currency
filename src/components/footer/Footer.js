const Footer = ({language}) => {

	let text;

	switch (language) {
		case 'EN':
			text = 'Exchange rate according to the data of the National Bank of Ukraine'
			break;
		case 'PL':
			text = 'Kurs walutowy według danych Narodowego Banku Ukrainy'
			break;
		case 'UA':
			text = 'Курс валют за даними Національного банку України'
			break;
		default: 
			text = 'Exchange rate according to the data of the National Bank of Ukraine'
	}

return (
		<>
			<div className="container-fluid text-center p-4">
				<p>{text}</p>
				<a href="https://bank.gov.ua/">bank.gov.ua</a>
			</div>
		</>
	)
}


export default Footer;





