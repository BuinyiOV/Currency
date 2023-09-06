const Lang = ({onClick}) => {

	const onSelectLanguage = (e) => {
		onClick(e.target.value)
	}

return (
	<>
		<div className="container mb-1 d-flex justify-content-end">
			<div className="btn-group" role="group" aria-label="Basic radio toggle button group">
				<input type="radio" className="btn-check" name="btnradio" id="btnradio1" value="EN" autoComplete="off" defaultChecked
						onClick={onSelectLanguage}/>
				<label className="btn btn-outline-primary" htmlFor="btnradio1">EN</label>

				<input type="radio" className="btn-check" name="btnradio" id="btnradio2" value="PL" autoComplete="off"
						onClick={onSelectLanguage}/>
				<label className="btn btn-outline-primary" htmlFor="btnradio2">PL</label>

				<input type="radio" className="btn-check" name="btnradio" id="btnradio3" value="UA" autoComplete="off"
						onClick={onSelectLanguage}/>
				<label className="btn btn-outline-primary" htmlFor="btnradio3">UA</label>
			</div>
		</div>
	</>

)
}


export default Lang;