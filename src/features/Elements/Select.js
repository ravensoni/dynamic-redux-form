/* eslint-disable */
import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeSelect, handleSelectSizeWise } from '../counter/counterSlice';

// mui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect from '@mui/material/Select';


const Select = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {
	
	const fetchState = useSelector((state) => state.counter.options_data)
	const dispatch = useDispatch()



	const checkStyleAvailability = (loopedValues, arrCheck) => {
		if(arrCheck !== undefined) {
			if(arrCheck.indexOf(selected_Size) > -1) {
				return true
			}else {
				return false
			}
		} else {
			return true
		}
	}

	return (
		<div
			style={{
				// marginLeft:"100px"
			}}
		>

			<FormControl >
				<InputLabel id="demo-simple-select-label">
					{field_label}
				</InputLabel>
				<MuiSelect
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={field_value}
					label={field_label}
					onChange={(event) => dispatch(handleChangeSelect(event))}
					size={'small'}
					// fullWidth
					name={field_id}
					style={{ width:'300px' }}
				>
					{field_options.length > 0 && field_options.map((option, i) => (
						checkStyleAvailability(option.option_label, option.option_avail_size_arr) === true ? (
							<MenuItem value={option.option_label} key={i}>
								{option.option_label}
							</MenuItem>
						) : (null)
					))}
				</MuiSelect>
			</FormControl>
			
			<br/><br/>
		</div>
	)
}

export default Select
