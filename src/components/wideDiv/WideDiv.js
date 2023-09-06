const WideDiv = ({ value, filledText }) => {

	if(document.querySelector(".col-lg-12.mb-3.fs-5")) {
		
		document.querySelectorAll(".col-lg-12.mb-3.fs-5").forEach((e) => {
			e.animate(
				[
					{ filter: 'opacity(50%)' },
					{ filter: 'opacity(100%)'},
				],
				{
					duration: 500,
					iterations: 1,
				},
			);
		})
		}

	return (
			<div className="col-lg-12 mb-3 fs-6" style={{height: '3vh'}}>{filledText}{value}</div>
	)
}

export default WideDiv;