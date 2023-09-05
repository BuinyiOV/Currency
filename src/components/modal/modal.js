

const Modal = () => {


	return (
			<>
				<div className="modal fade" id="modalToggle" aria-hidden="true" aria-labelledby="modalToggleLabel" tabindex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="modalToggleLabel">Деталі операції</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								<form>
									<div class="mb-3">
										<label for="card-number" className="col-form-label">Номер рахунку</label>
										<input type="number" className="form-control" id="card-number"/>
									</div>
									<div class="mb-3">
										<label for="card-code" className="col-form-label">CVV-code</label>
										<input type="number" className="form-control" id="card-code"/>
									</div>
									<div className="mb-3">
										<label for="message-text" className="col-form-label">Коментар</label>
										<textarea className="form-control" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer justify-content-between">
								<button type="button" className="btn btn-secondary fs-5" data-bs-dismiss="modal">Відміна</button>
								<button className="btn btn-primary fs-5" data-bs-target="#modalToggle2" data-bs-toggle="modal">Замовити</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="modalToggle2" aria-hidden="true" aria-labelledby="modalToggleLabel2" tabindex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="modalToggleLabel2">Готово</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								Замовлення в процесі реалізації
							</div>
							<div className="modal-footer">
							<button type="button" className="btn btn-primary fs-5" data-bs-dismiss="modal">Ок</button>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-primary mx-5 my-3 fs-5" data-bs-target="#modalToggle" data-bs-toggle="modal">Замовити переказ на рахунок</button>
				

				<div className="modal fade" id="secondModalToggle" aria-hidden="true" aria-labelledby="secondModalToggleLabel" tabindex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="secondModalToggleLabel">Деталі операції</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								<form>
									<div class="mb-3">
										<label for="card-number" className="col-form-label">Номер телефону</label>
										<input type="number" className="form-control" id="card-number"/>
									</div>
									<div class="mb-3">
										<label for="card-code" className="col-form-label">Адреса</label>
										<input type="text" className="form-control" id="card-code"/>
									</div>
									<div className="mb-3">
										<label for="message-text" className="col-form-label">Коментар</label>
										<textarea className="form-control" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer justify-content-between">
								<button type="button" className="btn btn-secondary fs-5" data-bs-dismiss="modal">Відміна</button>
								<button className="btn btn-primary fs-5" data-bs-target="#secondModalToggle2" data-bs-toggle="modal">Замовити</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal fade" id="secondModalToggle2" aria-hidden="true" aria-labelledby="secondModalToggleLabel2" tabindex="-1">
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="secondModalToggleLabel2">Готово</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body fs-5">
								Ми зателефонуємо протягом 10 хвилин
							</div>
							<div className="modal-footer">
							<button type="button" className="btn btn-primary fs-5" data-bs-dismiss="modal">Ок</button>
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-primary mx-5 my-3 fs-5" data-bs-target="#secondModalToggle" data-bs-toggle="modal">Замовити доставку готівки</button>
			</>
	)
}

export default Modal;