/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
// 
import { car_data } from "../../data/car_data"



const initialState = {
	selected_Model: "Panigale",
	options_data: car_data
};

export const counterSlice = createSlice({
	name: "mainSlice",
	initialState,
	reducers: {
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
		handleChangeSelect: (state, action) => {
		
			
			for(let i = 0; i < state.options_data.length; i++) {
				state.options_data[i].fields.forEach(field => {
					const { field_type, field_id, field_options } = field;
					if (action.payload.target !== undefined && action.payload.target.name === field_id) {
						switch (field_type) {
							case 'radio':
								field['field_value'] = action.payload.target.value;
								break;	
	
							case 'select':
								field['field_value'] = action.payload.target.value;
								break;
		
							default:
								field['field_value'] = action.payload.target.value;
								break;
								
						}
					} else if(action.payload.target === undefined && action.payload.event.target.name === field_id) {
						switch(field_type) {
							case "checkbox":
								for (let index = 0; index < field_options.length; index++) {
									if(field_options[index].option_label === action.payload.option_label){
										field_options[index].option_selected = action.payload.event.target.checked
									}
								}
								break;

							case "bgradio":
								field['field_value'] = action.payload.option_label
								break;

							case "imgradio":
								if(field_id === "Select_Model") {
									state.selected_Model = action.payload.option_label
									field['field_value'] = action.payload.option_label
									break;
								} else {
									field['field_value'] = action.payload.option_label
									break;
								}

							default:
								field['field_value'] = action.payload.event.target.value;
								break;
						}
					}
				});
			}
			// 
		},
		handleChangeCustomRadio: (state, action) => {
			console.log(action);
		},
		handleSelectSizeWise: (state, action) => {
			console.log(action);
		}
	},
});

export const { 
	incrementByAmount, 
	handleChangeSelect,
	handleChangeCustomRadio,
	handleSelectSizeWise
} = counterSlice.actions;


export default counterSlice.reducer;
