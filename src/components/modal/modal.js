

const Modal = ({language}) => {


	let text;

	switch (language) {
		case 'EN':
			text = {
				detals: 'Operation Details',
				cardNo: 'Account number',
				cvvCode: 'CVV code',
				comment: 'Comment',
				cancelOperation: 'Cancel',
				approve: 'Confirm',
				done: 'Done',
				processing: 'Order in progress',
				ok: 'Ok',
				transfer: 'Order a transfer to a bank account',
				phone: 'Phone number',
				adress: 'Address',
				willCall: 'We will call within 10 minutes',
				cash: 'Order cash delivery'
				}
			break;
		case 'PL':
			text = {
				detals: 'Szczegóły Operacji',
				cardNo: 'Numer rachunku',
				cvvCode: 'Kod CVV',
				comment: 'Komentarz',
				cancelOperation: 'Anuluj',
				approve: 'Potwierdź',
				done: 'Gotowe',
				processing: 'Zamówienie w toku',
				ok: 'Ok',
				transfer: 'Zamów przelew na rachunek bankowy',
				phone: 'Numer telefonu',
				adress: 'Adres',
				willCall: 'Zadzwonimy w ciągu 10 minut',
				cash: 'Zamów dostawę gotówki'
				}
			break;
		case 'UA':
			text = {
				detals: 'Деталі операції',
				cardNo: 'Номер рахунку',
				cvvCode: 'код CVV',
				comment: 'Коментар',
				cancelOperation: 'Відміна',
				approve: 'Замовити',
				done: 'Готово',
				processing: 'Замовлення в процесі реалізації',
				ok: 'Ок',
				transfer: 'Замовити переказ на рахунок',
				phone: 'Номер телефону',
				adress: 'Адреса',
				willCall: 'Ми зателефонуємо протягом 10 хвилин',
				cash: 'Замовити доставку готівки'
				}
			break;
		default: 
			text = {
				detals: 'Operation Details',
				cardNo: 'Account number',
				cvvCode: 'CVV code',
				comment: 'Comment',
				cancelOperation: 'Cancel',
				approve: 'Confirm',
				done: 'Done',
				processing: 'Order in progress',
				ok: 'Ok',
				transfer: 'Order a transfer to a bank account',
				phone: 'Phone number',
				adress: 'Address',
				willCall: 'We will call within 10 minutes',
				cash: 'Order cash delivery'
				}
	}


	return (
			<>
				<div className="modal fade" id="modalToggle" aria-hidden="true" aria-labelledby="modalToggleLabel" modal="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="modalToggleLabel">{text.detals}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								<form>
									<div className="mb-3">
										<label htmlFor="card-number" className="col-form-label">{text.cardNo}</label>
										<input type="number" className="form-control" id="card-number"/>
									</div>
									<div className="mb-3">
										<label htmlFor="card-code" className="col-form-label">{text.cvvCode}</label>
										<input type="number" className="form-control" id="card-code"/>
									</div>
									<div className="mb-3">
										<label htmlFor="message-text" className="col-form-label">{text.comment}</label>
										<textarea className="form-control" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer justify-content-between">
								<button type="button" className="btn btn-secondary fs-5" data-bs-dismiss="modal">{text.cancelOperation}</button>
								<button className="btn btn-primary fs-5" data-bs-target="#modalToggle2" data-bs-toggle="modal">{text.approve}</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="modalToggle2" aria-hidden="true" aria-labelledby="modalToggleLabel2" modal="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="modalToggleLabel2">{text.done}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								{text.processing}
							</div>
							<div className="modal-footer">
							<button type="button" className="btn btn-primary fs-5" data-bs-dismiss="modal">{text.ok}</button>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-primary mx-5 my-3 fs-5" data-bs-target="#modalToggle" data-bs-toggle="modal">{text.transfer}</button>
				

				<div className="modal fade" id="secondModalToggle" aria-hidden="true" aria-labelledby="secondModalToggleLabel" modal="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="secondModalToggleLabel">{text.detals}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								<form>
									<div className="mb-3">
										<label htmlFor="card-number" className="col-form-label">{text.phone}</label>
										<input type="number" className="form-control" id="card-number"/>
									</div>
									<div className="mb-3">
										<label htmlFor="card-code" className="col-form-label">{text.adress}</label>
										<input type="text" className="form-control" id="card-code"/>
									</div>
									<div className="mb-3">
										<label htmlFor="message-text" className="col-form-label">{text.comment}</label>
										<textarea className="form-control" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer justify-content-between">
								<button type="button" className="btn btn-secondary fs-5" data-bs-dismiss="modal">{text.cancelOperation}</button>
								<button className="btn btn-primary fs-5" data-bs-target="#secondModalToggle2" data-bs-toggle="modal">{text.approve}</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="secondModalToggle2" aria-hidden="true" aria-labelledby="secondModalToggleLabel2" modal="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="secondModalToggleLabel2">{text.done}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								{text.willCall}
							</div>
							<div className="modal-footer">
							<button type="button" className="btn btn-primary fs-5" data-bs-dismiss="modal">{text.ok}</button>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-primary mx-5 my-3 fs-5" data-bs-target="#secondModalToggle" data-bs-toggle="modal">{text.cash}</button>
			</>
	)
}

export default Modal;