/* eslint-disable */ 
import React from "react"
import { useDispatch, useSelector } from "react-redux";
// 
import Checkbox from './Checkbox';
// import Input from './Input';
import Radio from './Radio';
import ImgRadio from './ImgRadio';
import BgRadio from './BgRadio';
import Select from './Select';

export const Elements = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, opts_group_avail_style, field_options } }) => {

	const fetchState = useSelector((state) => state.counter.options_data)
	const dispatch = useDispatch()

	if(opts_group_avail_style !== undefined) {
		if(opts_group_avail_style.indexOf("some_variable") > -1) {
			switch (field_type) {
				// case 'text':
				// 	return (<Input
				// 		field_id={field_id}
				// 		field_label={field_label}
				// 		field_placeholder={field_placeholder}
				// 		field_value={field_value}
				// 	/>)
		
				case 'select':
					return (<Select
						field_id={field_id}
						field_label={field_label}
						field_placeholder={field_placeholder}
						field_value={field_value}
						opts_group_avail_style={opts_group_avail_style}
						field_options={field_options}
					/>)
		
				case 'checkbox':
					return (<Checkbox
						field_id={field_id}
						field_label={field_label}
						field_value={field_value}
						opts_group_avail_style={opts_group_avail_style}
						field_options={field_options}
					/>)
		
				case 'radio':
					return (<Radio
						field_id={field_id}
						field_label={field_label}
						field_placeholder={field_placeholder}
						field_value={field_value}
						opts_group_avail_style={opts_group_avail_style}
						field_options={field_options}
					/>)
		
				case 'imgradio':
					return (<ImgRadio
						field_id={field_id}
						field_label={field_label}
						field_placeholder={field_placeholder}
						field_value={field_value}
						opts_group_avail_style={opts_group_avail_style}
						field_options={field_options}
					/>)
		
				case 'bgradio':
					return (<BgRadio
						field_id={field_id}
						field_label={field_label}
						field_placeholder={field_placeholder}
						field_value={field_value}
						opts_group_avail_style={opts_group_avail_style}
						field_options={field_options}
					/>)
		
				default:
					return null;
			}
		} else {
			return null
		}
	} else {
		/**
		 * If No availability Array found for a particular option group, then it will render as it is.
		 * Then it will consider that we wanna render the Option Group.
		 */
		switch (field_type) {
			// case 'text':
			// 	return (<Input
			// 		field_id={field_id}
			// 		field_label={field_label}
			// 		field_placeholder={field_placeholder}
			// 		field_value={field_value}
			// 	/>)
	
			case 'select':
				return (<Select
					field_id={field_id}
					field_label={field_label}
					field_placeholder={field_placeholder}
					field_value={field_value}
					opts_group_avail_style={opts_group_avail_style}
					field_options={field_options}
				/>)
	
			case 'checkbox':
				return (<Checkbox
					field_id={field_id}
					field_label={field_label}
					field_value={field_value}
					opts_group_avail_style={opts_group_avail_style}
					field_options={field_options}
				/>)
	
			case 'radio':
				return (<Radio
					field_id={field_id}
					field_label={field_label}
					field_placeholder={field_placeholder}
					field_value={field_value}
					opts_group_avail_style={opts_group_avail_style}
					field_options={field_options}
				/>)
	
			case 'imgradio':
				return (<ImgRadio
					field_id={field_id}
					field_label={field_label}
					field_placeholder={field_placeholder}
					field_value={field_value}
					opts_group_avail_style={opts_group_avail_style}
					field_options={field_options}
				/>)
	
			case 'bgradio':
				return (<BgRadio
					field_id={field_id}
					field_label={field_label}
					field_placeholder={field_placeholder}
					field_value={field_value}
					opts_group_avail_style={opts_group_avail_style}
					field_options={field_options}
				/>)
	
			default:
				return null;
		}
	}

	
}
