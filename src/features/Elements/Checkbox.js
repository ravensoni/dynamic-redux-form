/* eslint-disable */ 
import React, { useContext } from 'react'
// mui
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import MuiCheckbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeSelect } from '../counter/counterSlice';

const Checkbox = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {

	const fetchState = useSelector((state) => state.counter.options_data)
	const dispatch = useDispatch()

	const checkSizeAvailability = (field_id, label_name_loop, arrSize) => {
		// If some property is Not provided in it, then we want to let it loop as it would Normally.
		if(arrSize !== undefined) {
			if(arrSize.indexOf("some_variable") > -1) {
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
			style={{
				// marginLeft:"100px"
			}}
		>
			
			<FormLabel component="legend">
				{field_label}
			</FormLabel>

			
			<FormGroup>
				{field_options.length > 0 && field_options.map((option, i) => {
					return (
						<React.Fragment key={i}>
							{checkSizeAvailability(field_id, option.option_label, option.option_avail_size_arr) === true ? (
								<>
									<FormControlLabel 
										control={<MuiCheckbox 
											checked={option.option_selected}
											name={field_id}
											onChange={(event) => dispatch(handleChangeSelect({
												event:event,
												option_label: option.option_label
											}))}
											size="small"
										/>} 
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
			</FormGroup>

			<br/><br/>
		</div>
	)
}

export default Checkbox
