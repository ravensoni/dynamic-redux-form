/* eslint-disable */ 
import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
	const { handleChange } = useContext(FormContext)
	return (
		<div className="mb-3">
			<br/>
			
			<label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
			<br/>
			<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
				placeholder={field_placeholder ? field_placeholder : ''}
				value={field_value}
				onChange={event => handleChange(field_id, event)}
			/>
			{/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
			<br/><br/>
		</div>
	)
}

export default Input
