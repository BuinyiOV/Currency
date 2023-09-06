

const Navbar = ({language}) => {

	let about;
	let spec;
	let contact;

	let aboutBtn;
	let specBtn;
	let contactBtn;

	switch (language) {
		case 'EN':
			aboutBtn = 'About the company'
			about = 'Since 1989, the company\`s mission has been to support clients on their path to economic success. We created our firm to help anyone who needs help with accounting. Over the years, we have won the trust of clients who trust us not only with the financial issues of their business, but also with many commercial secrets. Thanks to customer satisfaction, we can develop and improve our skills'
			specBtn = 'Specification'
			spec = 'We provide accounting services for more than 500 different entities. We specialize in serving small and medium-sized companies, but our clients are also large enterprises. We advise on the selection of external sources of financing. We provide consultations to individual clients, offer assistance in preparing annual tax returns, and suggest the most useful calculation systems. We also serve associations, foundations, and municipal housing funds, thanks to which we are familiar with the specifics of various organizational forms.'
			contactBtn = 'Contacts'
			contact = 'St. Kostyantynivska 106, Kyiv'
			break;
		case 'PL':
			aboutBtn = 'O firmie'
			about = 'Od 1989 roku misją firmy jest wspieranie klientów w drodze do sukcesu gospodarczego. Stworzyliśmy naszą firmę, aby pomóc każdemu, kto potrzebuje pomocy w księgowości. Na przestrzeni lat zdobyliśmy zaufanie klientów, którzy powierzają nam nie tylko kwestie finansowe swojej działalności, ale także wiele tajemnic handlowych. Dzięki zadowoleniu klientów możemy się rozwijać i doskonalić nasze umiejętności'
			specBtn = 'Specyfikacja'
			spec = 'Świadczymy usługi księgowe dla ponad 500 różnych podmiotów. Specjalizujemy się w obsłudze małych i średnich firm, ale naszymi klientami są także duże przedsiębiorstwa. Doradzamy w wyborze zewnętrznych źródeł finansowania. Udzielamy konsultacji klientom indywidualnym, oferujemy pomoc w przygotowaniu rocznego zeznania podatkowego, proponujemy najbardziej przydatne systemy kalkulacyjne. Obsługujemy także stowarzyszenia, fundacje i miejskie fundusze mieszkaniowe, dzięki czemu znamy specyfikę różnych form organizacyjnych.'
			contactBtn = 'Kontakt'
			contact = 'ulica. Kostyantynowska 106, Kijów'
			break;
		case 'UA':
			aboutBtn = 'Про фірму'
			about = 'З 1989 року місією компанії є надання підтримки клієнтам на шляху до досягнення економічного успіху. Ми створили нашу фірму для того, щоб допомогти кожному, хто потребує допомоги в області бухгалтерського обліку. Роками ми завойовували довіру клієнтів, які довіряють нам не лише фінансові питання свого бізнесу, але і багато комерційних таємниць. Завдяки задоволенню клієнтів, ми можемо розвиватись і вдосконалювати свої навички'
			specBtn = 'Специфікація'
			spec = 'Ми надаємо бухгалтерські послуги для більш ніж 500 різних суб\`єктів. Ми спеціалізуємось на обслуговуванні малих і середніх компаній, однак нашими клієнтами бувають також великі підприємства. Ми консультуємо з питань щодо вибору зовнішніх джерел фінансування. Надаємо консультації індивідуальним клієнтам, пропонуємо допомогу в приготуванні річних податкових декларацій, підказуємо найкорисніші розрахункові системи. Обслуговуються також асоціації, фонди, муніципальні житлові фонди, завдяки чому ми обізнані в специфіці різних організаційних форм.'
			contactBtn = 'Контакти'
			contact = 'вул. Костянтинівська 106, Київ'
			break;
		default: 
			aboutBtn = 'About the company'
			about = 'Since 1989, the company\`s mission has been to support clients on their path to economic success. We created our firm to help anyone who needs help with accounting. Over the years, we have won the trust of clients who trust us not only with the financial issues of their business, but also with many commercial secrets. Thanks to customer satisfaction, we can develop and improve our skills'
			specBtn = 'Specification'
			spec = 'We provide accounting services for more than 500 different entities. We specialize in serving small and medium-sized companies, but our clients are also large enterprises. We advise on the selection of external sources of financing. We provide consultations to individual clients, offer assistance in preparing annual tax returns, and suggest the most useful calculation systems. We also serve associations, foundations, and municipal housing funds, thanks to which we are familiar with the specifics of various organizational forms.'
			contactBtn = 'Contacts'
			contact = 'St. Kostyantynivska 106, Kyiv'
		}



	return (
			<>
			<div className="container text-center sticky-top">
				<div className="row">



					<button className="btn p-2 mb-1 fs-3 bg-primary bg-gradient bg-opacity-75 sticky-top" style={{ fontFamily: 'Lobster'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
					<path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
					</svg>
					Big Money</button>

					<div className="offcanvas offcanvas-top h-50" modal="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
						<div className="offcanvas-header row overflow-auto">

							<div className="col-11 mb-5 fs-4" style={{ fontFamily: 'Lobster'}}>
								<ul className="nav nav-pills row justify-content-center" id="pills-tab" role="tablist">
									<li className="nav-item col-sm" role="presentation">
										<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">{aboutBtn}</button>
									</li>
									<li className="nav-item col-sm" role="presentation">
										<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">{specBtn}</button>
									</li>
									<li className="nav-item col-sm" role="presentation">
										<button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">{contactBtn}</button>
									</li>
								</ul>
							</div>
							<button type="button" className="btn-close col-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
							<div className="tab-content col-12 fs-5" id="pills-tabContent">
								<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" modal="0">
									<p>{about}</p>
								</div>
								<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" modal="0">
									<p>{spec}</p>
								</div>
								<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" modal="0">
								<div className="container text-center">
									<div className="row align-items-center fs-4 py-4">
										<div className="col">{contact}</div>
										<div className="col">+38 (044) 360 60 09</div>
										<div className="col"><a href="#">office@firma.com.ua</a></div>
									</div>
									</div>
								</div>
							</div>


							
						</div>
						{/* <div className="offcanvas-body">
							...
						</div> */}
					</div>



					</div>
			</div>




			</>
	)
}

export default Navbar;