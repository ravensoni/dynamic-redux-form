/* eslint-disable */ 
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeSelect, handleChangeCustomRadio } from '../counter/counterSlice';
// mui
import MuiRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Radio = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {

	const fetchState = useSelector((state) => state.counter.options_data)
	const dispatch = useDispatch()

	const checkSizeAvailability = (field_id, label_name_loop, arrSize) => {
		if(arrSize !== undefined) {
			if(arrSize.indexOf('some_variable') > -1) {
				return true
			} else {
				return false
			}
		} else {
			return true
		}
	}

	return (
		<div 
			className=""
			style={{
				// marginLeft:"100px"
			}}
		>
			
			<FormLabel id={field_id}>
				{field_label}
			</FormLabel>
			<RadioGroup
				aria-labelledby={field_id}
				name={field_id}
				value={field_value}
				onChange={(event) => dispatch(handleChangeSelect(event))}
			>
				{field_options.length > 0 && field_options.map((option, i) => {
					return (
						<React.Fragment key={i}>
							{checkSizeAvailability(field_id, option.option_label, option.option_avail_size_arr) === true ? (
								<>
									<FormControlLabel 
										value={option.option_label}
										control={<MuiRadio size="small" />} 
										label={option.option_label} 
										key={i}
									/>
								</>
							) : (
								<></>
							)}
						</React.Fragment>
					)
				})}
			</RadioGroup>

			<br/><br/>
		</div>
	)
}

export default Radio;