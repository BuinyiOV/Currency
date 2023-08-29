const Child = ({ onChange }) => {
	const handleChange = (event) => {
	  onChange(event.target.value) // callback-функция
	}
 
	return (
	  <input
		 type="text"
		 onChange={handleChange}
	  />
	)
 }


 export default Child